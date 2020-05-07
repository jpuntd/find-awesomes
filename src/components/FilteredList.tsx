import React, { FC, useState } from "react";

import { data } from "../fakeApi/db.json";
import RepositoryList from "./RepositoryList";
import { SearchField } from "./SearchField";

export const FilteredList: FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const changeSearchTerm = (term: string) => setSearchTerm(term);
  return (
    <div>
      <SearchField
        searchTerm={searchTerm}
        changeSearchTerm={changeSearchTerm}
      />
      <RepositoryList
        repositories={data.search.edges
          .filter((edge) => edge.node.nameWithOwner.includes(searchTerm))
          .map((edge) => edge.node)}
      />
    </div>
  );
};
