import { getAllPostIds, getPostData, count } from '../../lib/post'
import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import Nav from '../../components/Nav'
import Pagination from '../../components/Pagination'
import GlobalStyles from '../../components/styles/GlobalStyles'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

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

div.carousel-wrapper{
  max-width: var(--maxWidth);
  width: 100%;
  max-height: 563px;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

img{
  width: 100%;
  height: 100%;
  object-fit: scale-down;
}
`

const PostDetails = styled.div`
  margin: 0 auto;
  max-width: var(--maxWidth);
  background: var(--black);
  color: var(--white, #fff);
  padding: 1rem;
`

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
}

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
              {postData.url && (
                <span className='link-out'><a href={postData.url}>↗</a></span>
              )}
            </h1>
          {typeof postData.imageUrl === "string" && (
            <img src={postData.imageUrl} alt={postData.name}/>
          )}
          {typeof postData.imageUrl === "object" && (
            <Carousel
              swipeable={true}
              draggable={true}
              responsive={responsive}
              ssr={true}
              infinite={true}
            >
              {postData.imageUrl.map(element => (
                <div key={element} className="carousel-wrapper">
                  <img src={element} alt={postData.name} />
                </div>
              ))}
            </Carousel>
          )}
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

