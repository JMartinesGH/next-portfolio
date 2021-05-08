import Link from 'next/link'
import GlobalStyles from '../components/styles/GlobalStyles';
import styled from 'styled-components'
import Nav from '../components/Nav'
import Head from 'next/head'

const Tools = styled.div`
margin: 0 auto;
max-width: var(--maxWidth);
min-height: 100vh;

a{
  text-decoration: underline;
  font-weight: bold;
}
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
          For this presentation I used <a href="https://nextjs.org/" target="_blank">Next.js</a> and I'm serving the site via <a href="ttps://www.netlify.com/" target="_blank">Netlify</a> along with Netlify's <a href="https://docs.netlify.com/large-media/overview/" target="_blank">Large Media</a>. Other tools I'm using are <a href="https://styled-components.com/" target="_blank">Styled Components</a> for CSS in JS, <a href="https://ricostacruz.com/nprogress/" target="_blank">NProgress</a> for progress bars, and <a href="https://www.npmjs.com/package/react-multi-carousel" target="_blank">react-multi-carousel</a> for a carousel on the pages with multiple images. The animated gradient is based on a this <a href="https://codepen.io/P1N2O/pen/pyBNzX" target="_blank">Code Pen</a>. 
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
          <li>
            <a href="https://www.netlify.com/" target="_blank">
              Netlify
            </a>
          </li>
          <li>
            <a href="https://docs.netlify.com/large-media/overview/" target="_blank">
              Netlify - Large Media
            </a>
          </li>
        </ul>
      </Tools>
    </>
  )
}