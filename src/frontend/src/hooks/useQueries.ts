import { useMutation, useQuery } from "@tanstack/react-query";
import type { ShoppingItem } from "../backend.d";
import { useActor } from "./useActor";

export function useUserRole() {
  const { actor, isFetching } = useActor();
  return useQuery({
    queryKey: ["userRole"],
    queryFn: async () => {
      if (!actor) return null;
      return actor.getCallerUserRole();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useCreateCheckoutSession() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async ({
      items,
      successUrl,
      cancelUrl,
    }: { items: ShoppingItem[]; successUrl: string; cancelUrl: string }) => {
      if (!actor) throw new Error("Actor not available");
      return actor.createCheckoutSession(items, successUrl, cancelUrl);
    },
  });
}
