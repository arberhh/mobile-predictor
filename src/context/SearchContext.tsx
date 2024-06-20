import { FC, createContext, useState } from "react";

const initialState = {
  searchTerm: "dogs",
  updateSearchTerm: (term: string) => {},
};

const SearchContext = createContext(initialState);

type SearchProviderProps = {
  children: React.ReactNode;
};

const SearchProvider: FC<SearchProviderProps> = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState<string>("cats");

  const updateSearchTerm = (term: string) => {
    setSearchTerm(term);
  };

  return (
    <SearchContext.Provider value={{ searchTerm, updateSearchTerm }}>
      {children}
    </SearchContext.Provider>
  );
};

export { SearchContext, SearchProvider };
