import { getAllPostIds, getPostData } from '../../lib/post'
import Head from 'next/head'
import Nav from '../../components/Nav'
import styled from 'styled-components'

const PostStyled = styled.div`
margin: 0 auto;
max-width: 800px;
`

export default function Post({ postData }) {
  postData = postData[0]
  return (
    <PostStyled>
      <Head>
        <title>{postData.name}</title>
      </Head>
      <Nav />
      <article>
        <h1 >{postData.name}</h1>
      </article>
    </PostStyled>
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

