import { FC, createContext, useState } from "react";

type SearchContextType = {
  searchTerm: string;
  updateSearchTerm: (term: string) => void;
};

const initialState: SearchContextType = {
  searchTerm: "cats",
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
