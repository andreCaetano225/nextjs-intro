import { GetStaticProps } from "next";
import Link from "next/link";
import SEO from "../../components/SEO";
import { getPrismicClient } from "../../services/prismic";
import Prismic from '@prismicio/client';
import {RichText} from 'prismic-dom';
import styles from './posts.module.scss';


interface Post {
    slugs: string;
    title: string;
    excerpt: string;
    updateAt: string;
}
interface PagPosts{
  posts: Post[];
}
export default function Posts({posts}: PagPosts) {
    return (
      <>
        <SEO title="Posts"/>
        <main className={styles.container}>
          <div className={styles.posts}>
            {posts.map( post => (
              <Link href="#" key={post.slugs}>
              <a>
               <time>{post.updateAt}</time>
               <strong>{post.title}</strong>
               <p>{post.excerpt}</p>
              </a>
            </Link>
            ))}
          </div>
        </main>
      </>
    )
  }
  
export const getStaticProps:GetStaticProps = async() => {
  const prismic = getPrismicClient();
  const respose = await prismic.query([
    Prismic.predicates.at('document.type', 'post')
  ], {
    fetch: ['post.title' , 'post.content'],
  })

  const posts = respose.results.map( post => {
    return{
      slug: post.uid,
      title: RichText.asText(post.data.title),
      excerpt: post.data.content.find(content => content.type === 'paragraph')?.text ?? '',
      updateAt: new Date(post.last_publication_date).toLocaleDateString('pt-Br',{
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      })
    }
  })
  return{
    props: {
      posts,
    },
    revalidate: 60 * 60 * 12, //12 HORAS
  }
}