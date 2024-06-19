import { useQuery } from "@tanstack/react-query";
import { searchGifs } from "@/services/gifService";

export function useSearchGifs(searchTerm: string) {
  return useQuery({
    queryKey: ["searchGifs", searchTerm],
    queryFn: () => searchGifs(searchTerm || "exciting"),
    staleTime: 5000,
  });
}
