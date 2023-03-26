import { NextSeo } from "next-seo";
import { useEffect } from "react";
import { useInfiniteQuery } from "react-query";
import { Footer } from "../components/Footer";

import { Header } from "../components/Header";
import { Post } from "../components/Post";

import { API } from "../services/API";
import styles from "../styles/Home.module.scss";
import { IPost } from "../types/post";
import { fetchPosts } from "../utils/recursiveFetchPosts";

interface IHomeProps {
  posts: IPost[];
}

export default function Home({ posts }: IHomeProps) {
  const { data, isSuccess, hasNextPage, fetchNextPage } = useInfiniteQuery<IPost[]>({
    queryKey: ['posts'],
    queryFn: async ({ pageParam = 1 }) => {
      const { data } = await API.get(`/contents/pmenta?page=${pageParam}&per_page=20&strategy=new`)

      return data.filter((post: IPost) => post.parent_id === null)
    },
    initialData: () => {
      return {
        pageParams: [undefined],
        pages: [posts]
      }
    },
    staleTime: 1000,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = allPages.length + 1
      return lastPage.length !== 0 ? nextPage : undefined
    }
  })

  useEffect(() => {
    let fetching = false;
    const handleScroll = async (e: any) => { // Achar tipagem correta
      const { scrollHeight, scrollTop, clientHeight } = e.target.scrollingElement;
      if (!fetching && scrollHeight - scrollTop <= clientHeight * 1.2) {
        fetching = true
        if (hasNextPage) await fetchNextPage()
        fetching = false
      }
    }
    document.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [fetchNextPage, hasNextPage])

  return (
    <>
      <div className={styles.container}>
        <NextSeo
          title="spicyblog"
          description="Conteúdos sobre tecnologia escritos por João Martins"
        />
        <Header />
        <main className={styles.content}>
          {isSuccess && data.pages.map((page) => page.map((post: IPost) => (
            <Post post={post} key={post.id} />
          )))}
        </main>
        <Footer />
      </div>
    </>
  );
}

export async function getStaticProps() {
  try {
    const posts = await fetchPosts({ page: 1, posts: [] })

    return {
      props: {
        posts: posts
      },
      revalidate: 60 * 60 * 24, // 1 day
    };
  } catch {
    return {
      props: {
        posts: []
      },
      revalidate: 60, // 1 minute
    };
  }


}
