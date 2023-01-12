import * as timeago from 'timeago.js';

import { IPost } from "../../types/post"
import styles from './index.module.scss'

interface IPostProps {
 post: IPost
}

export const Post = ({ post }: IPostProps) => {
 return (
  <article className={styles.post}>
   <a target="_blank" href={`https://www.tabnews.com.br/pmenta/${post.slug}`} rel="noreferrer">
    {post.title || post.slug}
   </a>
   <div>
    <span>
     {post.tabcoins} tabcoins - {post.children_deep_count} comentários - <strong>pmenta</strong> - {timeago.format(new Date(post.created_at), 'pt-BR')}
    </span>
   </div>
  </article>
 )
}