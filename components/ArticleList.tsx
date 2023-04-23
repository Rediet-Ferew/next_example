import { Post } from "../pages/index";
import ArtcileItem from "./ArtcileItem";

interface Props {
  articles: Post[];
}
const ArticleList = ({ articles }: Props) => {
  return (
    <div className="grid md:grid-rows-none gap-4">
      
      {articles.map((article) => (
        <ArtcileItem article={article} key={article.id}/>
      ))}
    </div>
  );
};
export default ArticleList;
