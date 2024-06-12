import axiosInstance from "@/util/axiosInstance";

function searchGifs(searchTerm: string = "excited") {
  const response = axiosInstance.get("search", {
    params: {
      q: searchTerm,
      limit: 5,
    },
  });

  return response;
}

function getRandomGifs() {
  const response = axiosInstance.get("random");

  return response;
}

export { searchGifs, getRandomGifs };
