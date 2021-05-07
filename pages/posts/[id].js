import { getAllPostIds, getPostData, count } from '../../lib/post'
import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import Nav from '../../components/Nav'
import Pagination from '../../components/Pagination'
import GlobalStyles from '../../components/styles/GlobalStyles'
import PostStyled from '../../components/styles/PostStyled'
import PostDetails from '../../components/styles/PostDetails'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

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
  postData = postData[0] // make the object easier to work with
  const page = parseInt(postData.id) //get "page" number
  const pageCount = count // get total number of "pages"
  
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
              <span className='link-out'><a href={postData.url} target="_blank">↗</a></span>
            )}
          </h1>
          {/* if the imageUrl is single image user img element */}
          {typeof postData.imageUrl === "string" && (
            <img src={postData.imageUrl} alt={postData.name}/>
          )}
          {/* if the imageUrl is an array, display carousel*/}
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

// needed for static generation of links on build
export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback:false
  }
}

// takes in page id and uses it to the hit "api" for the correct data
export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}

