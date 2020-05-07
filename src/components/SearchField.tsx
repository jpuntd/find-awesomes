import React from "react";

type Props = {
  searchTerm: string;
  changeSearchTerm(term: string): void;
};

export const SearchField = ({ searchTerm, changeSearchTerm }: Props) => {
  return (
    <input
      type="search"
      value={searchTerm}
      onChange={(e) => changeSearchTerm(e.target.value)}
      placeholder="javascript"
    ></input>
  );
};
