import { getAllPostIds, getPostData } from '../../lib/post'
import Head from 'next/head'

export default function Post({ postData }) {
  postData = postData[0]
  return (
    <div>
      <Head>
        <title>{postData.name}</title>
      </Head>
      <article>
        <h1 >{postData.name}</h1>
      </article>
    </div>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback:false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}

