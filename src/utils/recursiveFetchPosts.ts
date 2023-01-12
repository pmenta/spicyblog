import { API } from "../services/API"
import { IPost } from "../types/post"

export async function fetchPosts({ page = 1, posts = [] }: { page: number, posts: IPost[] }) {
 try {
  const { data } = await API.get(`/contents/pmenta?page=${page}&per_page=20&strategy=new`)
  if (data.length === 0) return posts

  const filteredPosts = data.filter((post: IPost) => post.parent_id === null)
  const allPosts = [...filteredPosts, ...posts]

  if (allPosts.length < 12) fetchPosts({ page: page + 1, posts: allPosts })

  return allPosts

 } catch {
  return posts
 }
}