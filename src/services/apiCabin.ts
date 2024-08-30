import type { Cabin } from '@/types/Collection'
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
  if (newCabin.image instanceof File) {
    imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll('/', '')
  }

  const imagePath = hasImagePath
    ? (newCabin.image as string)
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`

  // 1 Create/Edit cabin
  const query = supabase.from('cabins')
  let data: Cabin | null = null
  let error = null

  // A Create
  if (!id) {
    const { data: insertData, error: insertError } = await query
      .insert([{ ...newCabin, image: imagePath }])
      .select()
      .returns<Cabin>()
      .single()

    data = insertData
    error = insertError
  }

  // B Edit
  if (id) {
    const { data: updateData, error: updateError } = await query
      .update({ ...newCabin, image: imagePath })
      .eq('id', id)
      .select()
      .returns<Cabin>()
      .single()

    data = updateData
    error = updateError
  }

  if (error) {
    console.error(error)
    throw new Error('Cabins could not be created')
  }

  // 2 Upload Image
  if (hasImagePath) {
    return data
  }

  const { error: storageError } = await supabase.storage
    .from('cabin-images')
    .upload(imageName, newCabin.image!)

  // 3 Delete the cabin if there was an error uploading image
  if (storageError) {
    await supabase.from('cabins').delete().eq('id', data!.id!)
    console.error(storageError)
    throw new Error('Cabins image could not be uploaded and the cabin was not created')
  }

  return data
}

export async function deleteCabin(id: number) {
  const { data, error } = await supabase.from('cabins').delete().eq('id', id)

  if (error) {
    console.error(error)
    throw new Error('Cabins could not be deleted')
  }

  return data
}
