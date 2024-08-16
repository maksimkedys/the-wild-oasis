import { type Cabin } from "../data/data-cabins";
import supabase, { supabaseUrl } from "./supabase";

export async function getCabins(): Promise<Cabin[]> {
  const { data: cabins, error } = await supabase.from("cabins").select("*");

  if (error) {
    throw new Error("Cabins could not be loaded");
  }

  return cabins as Cabin[];
}

export async function deleteCabin(id: number) {
  const { data: cabins, error } = await supabase
    .from("cabins")
    .delete()
    .eq("id", id);

  if (error) {
    throw new Error("Cabins could not be deleted ");
  }

  return cabins;
}

export async function createEditCabin(newCabin: Cabin, id?: number) {
  const hasImagePath =
    typeof newCabin.image === "string" &&
    newCabin.image.startsWith(supabaseUrl);

  const imageName: string = `${Math.random()}-${
    (newCabin.image as File).name
  }`.replaceAll("/", "");

  const imagePath: string = hasImagePath
    ? (newCabin.image as string)
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  let query;
  // Create cabin
  if (!id)
    query = supabase.from("cabins").insert([{ ...newCabin, image: imagePath }]);

  // Update cabin
  if (id)
    query = supabase
      .from("cabins")
      .update([{ ...newCabin, image: imagePath }])
      .eq("id", id);

  const { data, error } = await query!.select().single();

  if (error) {
    console.log(error.message);
    throw new Error("Cabin could not be created");
  }

  // Upload Image
  if (hasImagePath) return data as Cabin;

  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  if (storageError) {
    throw new Error("Cabin image can not be uploaded");
  }

  return data as Cabin;
}
