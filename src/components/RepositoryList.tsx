import React from "react";
import RepositoryCard from "./RepositoryCard";

type repository = {
  nameWithOwner: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  url: string;
};

type RepositoryListProps = {
  repositories: repository[];
};

const RepositoryList: React.FC<RepositoryListProps> = ({ repositories }) => (
  <ul className="Repositories">
    {repositories.map((repository) => (
      <RepositoryCard
        key={repository.nameWithOwner}
        nameWithOwner={repository.nameWithOwner}
        description={repository.description}
        url={repository.url}
      />
    ))}
  </ul>
);

export default RepositoryList;
