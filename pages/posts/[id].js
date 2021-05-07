import { getAllPostIds, getPostData, count } from '../../lib/post'
import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import Nav from '../../components/Nav'
import Pagination from '../../components/Pagination'
import GlobalStyles from '../../components/styles/GlobalStyles'

const PostStyled = styled.div`
margin: 0 auto;
max-width: var(--maxWidth);
min-height: 100vh;

h1{
  display: flex;
  justify-content: space-between;
  a{
    color: white;
    text-decoration: none;
  }
  span{
    margin: 0 0 1rem 8rem;
    background: var(--black);
    color: var(--white, #fff);
    padding: 1rem 0.5rem;

    @media screen and (min-width: 1024px){
      margin: 0 0 1rem;
    }
  }
  .link-out:hover{
    background: #3a3a3a;
  }
}

img{
  max-width: var(--maxWidth);
  width: 100%;
}
`

const PostDetails = styled.div`
  margin: 0 auto;
  max-width: var(--maxWidth);
  background: var(--black);
  color: var(--white, #fff);
  padding: 1rem;
`

export default function Post({ postData }) {
  postData = postData[0]
  const page = parseInt(postData.id)
  const pageCount = count
  
  return (
    <>
    <GlobalStyles/>
      <PostStyled>
        <Head>
          <title>{postData.name}</title>
        </Head>
        <Nav />
        <article>
            <h1>
              <span>{postData.name}</span>
              <span className='link-out'><a href={postData.url}>↗</a></span>
            </h1>
          {/* <Image
            src={postData.imageUrl}
            alt={postData.name}
            width="1000"
            height="563"
            layout="responsive"
          /> */}
          <img src={postData.imageUrl} alt={postData.name}/>
        </article>
        <Pagination page={page} count={pageCount} />
      </PostStyled>
      <PostDetails>
        {postData.details}
      </PostDetails>
    </>
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

