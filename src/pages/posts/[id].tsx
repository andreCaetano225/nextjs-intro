import { GetStaticProps } from "next";
import { useRouter } from "next/router";

interface Comment {
  id: string;
  body: string;
}

interface CommentsProps{
  comments: Comment[];
}
export default function Post({comments}: CommentsProps) {
    const router = useRouter();
    return (
      <>
        <h1>Bom dia3 {router.query.id}</h1>
        <ul>
        {comments.map( (commet) => (
          <li key={commet.id}>{commet.body}</li>
        ))}
      </ul>
      </>
    )
  }

    
export const getStaticProps:GetStaticProps<CommentsProps> = async(context) => {
  const {id} = context.params;
  const respose = await fetch(`http://localhost:333/posts?postId=${id}`);
  const comments = await respose.json();
  return{
    props: {
      comments
    },
    revalidate: 15,
  }
}
  