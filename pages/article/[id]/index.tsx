import React from "react";
import Link from "next/link";
import { GetServerSideProps, GetStaticProps, GetStaticPaths} from "next";
import { Post } from "@/pages/index";
// for routing into a specific id
import { useRouter } from "next/router";
import { server } from "@/config";
import Meta from "@/components/Meta";
interface Props {
  article: Post;
}
const article = ({ article }: Props) => {
  // const router = useRouter();
  // const { id } = router.query
  return (
    <>
    <Meta title = {article.title}/>
      <h1 className="text-4xl font bold">{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href="/">
        <span>GO BACK</span>
      </Link>
    </>
  );
};

export const getStaticProps: GetStaticProps<{ article: Post }> = async (
  context
) => {
  const res = await fetch(
    `${server}/api/articles/${context.params?.id}`
  );
  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths: GetStaticPaths <{id: string}>=async () => {
const res = await fetch(
  `${server}/api/articles/`
);
const articles = await res.json();

const ids = articles.map((article: Post) => article.id)
const paths = ids.map((id: number) => ({params : {id:id.toString()}}))
return {
  paths,
  fallback: false
}

}



// getserverside will fetch data at the time of request

// export const getServerSideProps: GetServerSideProps<{ article: Post }> = async (
//   context
// ) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params?.id}`
//   );
//   const article = await res.json();

//   return {
//     props: {
//       article,
//     },
//   };
// };
// export const getStaticProps: GetStaticProps<{ article: Post }> = async (
//     context
//   ) => {
//     const res = await fetch(
//       `https://jsonplaceholder.typicode.com/posts/${context.params?.id}`
//     );
//     const article = await res.json();
  
//     return {
//       props: {
//         article,
//       },
//     };
//   };

// export const getStaticPaths: GetStaticPaths <{id: string}>=async () => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts`
//   );
//   const articles = await res.json();

//   const ids = articles.map((article: Post) => article.id)
//   const paths = ids.map((id: number) => ({params : {id:id.toString()}}))
//   return {
//     paths,
//     fallback: false
//   }

// }
export default article;
