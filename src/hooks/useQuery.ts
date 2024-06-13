import { searchGifs } from "@/services/gifService";
import { useQuery } from "@tanstack/react-query";

export function useSearchGifs(searchTerm: string) {
  return useQuery({
    queryKey: ["searchGifs", searchTerm],
    queryFn: () => searchGifs(searchTerm),
    enabled: !!searchTerm, // Only run query if searchTerm is not empty
  });
}
