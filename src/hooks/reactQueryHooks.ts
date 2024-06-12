import { getRandomGifs, searchGifs } from "@/services/gifService";
import { useQuery } from "@tanstack/react-query";

function useSearchGifs(searchTerm: string) {
  return useQuery({
    queryKey: ["searchGifs", searchTerm],
    queryFn: () => searchGifs(searchTerm),
  });
}

function useRandomGifs() {
  return useQuery({
    queryKey: ["randomGifs"],
    enabled: true,
    queryFn: getRandomGifs,
  });
}

export { useSearchGifs, useRandomGifs };
