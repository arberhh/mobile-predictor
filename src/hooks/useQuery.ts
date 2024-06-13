import { searchGifs } from "@/services/gifService";
import { useQuery } from "@tanstack/react-query";

export function useSearchGifs(searchTerm: string) {
  return useQuery({
    queryKey: ["searchGifs", searchTerm],
    queryFn: () => searchGifs(searchTerm || "exciting"),
    staleTime: 5000,
  });
}
