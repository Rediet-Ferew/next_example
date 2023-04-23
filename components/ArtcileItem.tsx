import Link from "next/link";
import React from "react";

import artcileStyles from "../styles/Article.module.css";
import { Post } from "../pages/index";

interface Props {
  article: Post;
}

const ArtcileItem = ({ article }: Props) => {
  return ( 
    <Link href="/article/[id]" as={`/article/${article.id}`}>
      <div className="border-2 border-blue-600 bg-sky-500 hover:bg-sky-700">
        <h3 className={"text-2xl font-semibold "}>{article.title}</h3>
        <p>{article.excerpt}</p>
      </div>
    </Link>
  );
};

export default ArtcileItem;
