import Image from "next/image";
import { Inter } from "next/font/google";

// // const inter = Inter({ subsets: ['latin'] })

import { server } from "@/config";
import ArticleList from "../components/ArticleList";
export type Post = {
  
  id: number;
  title: string;
  excerpt: string;
  body: string;
};
interface Props {
  articles: Post[];
}

import Head from "next/head";
// import { NumericLiteral } from 'typescript'
export default function Home({ articles }: Props) {
  // console.log(articles);
  return (
    <div>
      <ArticleList articles={articles} />
    </div>
  );
}
// fetches data at build time
// export const getStaticProps = async () => {
//   let articles: Post[] = [];
//   const res = await fetch(
//     "https://jsonplaceholder.typicode.com/posts?_limit=6"
//   );
//   articles = await res.json();
//   // console.log(articles)

//   return {
//     props: {
//       articles,
//     },
//   };
// };

export const getStaticProps = async () => {
  let articles: Post[] = [];
  const res = await fetch(`${server}/api/articles`);
  articles = await res.json();
  // console.log(articles)

  return {
    props: {
      articles,
    },
  };
};
