import React from "react";

type RepositoryCardProps = {
  nameWithOwner: string;
  description: string;
  url: string;
};

const RepositoryCard: React.FC<RepositoryCardProps> = ({
  nameWithOwner,
  description,
  url,
}) => (
  <li className="repository-card">
    <a href={url}>
      <h2>{nameWithOwner}</h2>
      <div>{description}</div>
    </a>
  </li>
);

export default RepositoryCard;
