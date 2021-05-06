import { postData } from "../posts/postData"
import Link from 'next/link'

export const getStaticProps = async () => {
  return {
    props: {
      postData
    }
  }
}

export default function Home({ postData }) {
  return (
    <>
      {postData.map(post => (
        <div key={post.id}>
          <Link href={`/posts/${post.id}`}>
            {post.name}
          </Link>
        </div>
      ))}
    </>
  )
}