interface RepositorioItemPros{
  repository:{
    name:string;
    description:string;
    html_url:string;
  }
}

export function RepositorioItem(props:RepositorioItemPros) {
  return (
    <li>
      <strong>{props.repository?.name}</strong>
      <p>{props.repository?.description}</p>

      <a href="">{props.repository?.html_url}</a>
    </li>
  );
}
 