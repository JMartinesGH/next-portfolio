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
        </ul>
      </Tools>
    </>
  )
}