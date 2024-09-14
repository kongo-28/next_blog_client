import type {Post} from "@/types"  //isolatedModulesのエラー回避のため、型としてのみインポート
import React from "react";


type Props ={
    post: Post;
}
// pages/posts[:id].tsx
export async function getStaticPaths() {
  const res = await fetch("http://localhost:3000/posts");
  const posts: Post[] = await res.json();

  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return {
    // paths: [
    //   { params: { id: 'posts/1' } },
    // ],
    paths,
    fallback: true,
  }
}

export async function getStaticProps({params}: {params: {id: string}} ) {
  const res = await fetch(`http://localhost:3000/posts/${params.id}`);
  const post = await res.json();

  console.log(post);

  return {
    props: {
      post,
    },
    revalidate: 60,
  };
}

const Post = ( {post}: Props ) => {
  const router = useRouter()

  if(router.isFallback) {
    return <div>Loading...</div>
  }

  return <div>詳細ページです</div>;
;}

export default Post;