import type { PostgrestQueryBuilder } from '@supabase/postgrest-js'
import type { Cabin, CabinImage } from '@/types/Collection'
import supabase, { supabaseUrl } from './supabase'

export async function getCabins() {
  const { data, error } = await supabase.from('cabins').select('*')

  if (error) {
    console.error(error)
    throw new Error('Cabins could not be loaded')
  }

  return data
}

export async function createEditCabin(newCabin: Cabin, id?: string | null) {
  let hasImagePath = false
  if (typeof newCabin.image === 'string') {
    hasImagePath = newCabin.image?.startsWith?.(supabaseUrl)
  }

  let imageName = ''
  if (typeof newCabin.image === 'object') {
    imageName = `${Math.random()}-${(newCabin.image! as CabinImage)?.name}`.replaceAll('/', '')
  }

  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`
  // 1 Create/Edit cabin
  let query = supabase.from('cabins')

  // A Create
  if (!id) {
    query.insert([{ ...newCabin, image: imagePath as string }])
  }

  // B Edit
  if (id) {
    query.update({ ...newCabin, image: imagePath as string }).eq('id', id)
  }

  const { data, error } = await query.select().single()

  if (error) {
    console.error(error)
    throw new Error('Cabins could not be created')
  }

  // 2 Upload Image
  if (hasImagePath) {
    return data
  }

  const { error: storageError } = await supabase.storage
    .from('cabins-images')
    .upload(imageName, newCabin.image! as string)

  // 3 Delete the cabin if there was an error uploading image
  if (storageError) {
    await supabase.from('cabins').delete().eq('id', data.id)
    console.error(storageError)
    throw new Error('Cabins image could not be uploaded and the cabin was not created')
  }

  return data
}
