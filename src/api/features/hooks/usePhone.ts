import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import * as Phone from "../service/phone";

export const usePhone = () => {
  const queryClient = useQueryClient();

  const getPhone = useQuery({
    queryKey: ["phone"],
    queryFn: Phone.getPhones,
  });

  const createPhone = useMutation({
    mutationFn: Phone.createPhone,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["phone"] });
    },
  });
  const deletePhone = useMutation({
    mutationFn: Phone.deletePhone,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["phone"] });
    },
  });

    const updatePhone = useMutation({
    mutationFn: Phone.updatePhone,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["phone"] });
    },
  });

  return { getPhone, createPhone, deletePhone,updatePhone };
};
