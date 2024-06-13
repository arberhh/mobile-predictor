import axiosInstance from "@/util/axiosInstance";

async function searchGifs(searchTerm: string = "excited") {
  const response = await axiosInstance.get("search", {
    params: {
      q: searchTerm,
      limit: 5,
    },
  });

  return response.data;
}

export { searchGifs };
