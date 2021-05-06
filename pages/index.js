import { postData } from "../posts/postData"
import Link from 'next/link'
import GlobalStyles from '../components/styles/GlobalStyles';
import Hero from "../components/Hero";

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
      <GlobalStyles/>
      <Hero>
        <h1><span>Jamie Martines</span></h1>
        <h3><span>Front-End Developer</span></h3>
        <h3><span>she/her</span></h3>
        <h4>
          <Link href='/posts/1'>Begin</Link>
        </h4>
      </Hero>
    </>
  )
}