import styled from 'styled-components'
import Menu from './Menu'
import { postData } from "../posts/postData"
import Link from 'next/link'

const NavStyled = styled.nav`
position: fixed;
top: 0;
left: 0;
background: blue;
`

export default function Nav() {
  return (
    <NavStyled>
      <Menu>
        {postData.map(post => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              {post.name}
            </Link>
          </li>
        ))}
      </Menu>
    </NavStyled>
  )
}