import { postData } from "../posts/postData"
import Link from 'next/link'
import { createGlobalStyle } from 'styled-components';
import Hero from "../components/Hero";

const GlobalStyles = createGlobalStyle`
  html{
    --red: #ff0000;
    --black: #000000;
    --grey: #3a3a3a;
    --gray: var(--grey)
    --lightGrey: #e1e1e1;
    --lightGray: var(--lightGrey)
    --offWhite: #ededed;
    --maxWidth: 1000px;
    --bs: 0 12px 24px 0 rgba(0,0,0,0.09);
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after{
    box-sizing: inherit;
  }
  body{
    font-family: ---apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
  }
  a{
    text-decoration: none;
    color: var(--black);
  }
  a:hover{
    text-decoration: underline;
  }
  button{
    font-family: ---apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

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
      </Hero>
      <Link href='posts/1'>Begin</Link>
    </>
  )
}