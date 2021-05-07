import Link from 'next/link'
import GlobalStyles from '../components/styles/GlobalStyles';
import styled from 'styled-components'
import Nav from '../components/Nav'
import Head from 'next/head'

const Tools = styled.div`
margin: 0 auto;
max-width: var(--maxWidth);
min-height: 100vh;
`

export default function ToolsPage() {
  return (
    <>
      <GlobalStyles />
      <Head>
        <title>Tools I used</title>
      </Head>
      <Nav />
      <Tools>
        <p>
          For this presentation I used Next.js and I'm serving the site via Netlify. Other tools I'm using are Styled Components for CSS in JS, NProgress for progress bars, and react-multi-carousel for a carousel on the pages with multiple images. The animated gradient is based on a Code Pen linked below. 
        </p>
        <ul>
          <li>
            <a href="https://nextjs.org/" target="_blank">
              Next.js
            </a>
          </li>
          <li>
            <a href="https://www.npmjs.com/package/react-multi-carousel" target="_blank">
              react-multi-carousel
            </a>
          </li>
          <li>
            <a href="https://styled-components.com/" target="_blank">
              Styled Components
            </a>
          </li>
          <li>
            <a href="https://ricostacruz.com/nprogress/" target="_blank">
              NProgress
            </a>
          </li>
          <li>
            <a href="https://codepen.io/P1N2O/pen/pyBNzX" target="_blank">
              Code Pen - Pure CSS Animated Gradient Background
            </a>
          </li>
        </ul>
      </Tools>
    </>
  )
}