// Props pour le composant PageTitle
interface TitleProps {
  title: string;
}

const PageTitle = (props: TitleProps) => {
  return <h1>{props.title}</h1>;
};

export default PageTitle;