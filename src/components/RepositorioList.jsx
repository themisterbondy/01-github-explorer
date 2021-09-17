import { RepositorioItem } from "./RepositorioItem";

const reposotory = {
    name: 'unform',
    description: 'Forms in react',
    link: 'https://github.com/unform/unform'
};

export function ReposotoryList() {
    return (
        <section className="repositoryLisr">
            <h1>Lista de repositorios</h1>
            <ul>
                <RepositorioItem repository={reposotory} />
                <RepositorioItem repository={reposotory} />
                <RepositorioItem repository={reposotory} />
                <RepositorioItem repository={reposotory} />
                <RepositorioItem repository={reposotory} />
                <RepositorioItem repository={reposotory} />

            </ul>
        </section >
    )
}