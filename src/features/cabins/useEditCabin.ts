import { type Cabin } from "../../data/data-cabins";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useEditCabin() {
  const queryClient = useQueryClient();

  const { mutate: editCabin, isLoading: isEditing } = useMutation({
    mutationFn: ({ newCabinData, id }: { newCabinData: Cabin; id: number }) =>
      createEditCabin(newCabinData, id),
    onSuccess: () => {
      toast.success("New cabin succesfully edited");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },
    onError: (err: Error) => toast.error(err.message),
  });

  return { editCabin, isEditing };
}
