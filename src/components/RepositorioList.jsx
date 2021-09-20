import { useState, useEffect } from "react";
import { RepositorioItem } from "./RepositorioItem";

import "../styles/repositories.scss";

export function ReposotoryList() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/orgs/rocketseat/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  return (
    <section className="repository-list">
      <h1> Lista de repositorios </h1>
      <ul>
        {repositories.map((reposotory) => {
          return (
            <RepositorioItem key={reposotory.name} repository={reposotory} />
          );
        })}
      </ul>
    </section>
  );
}
