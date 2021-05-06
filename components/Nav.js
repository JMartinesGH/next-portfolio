import styled from 'styled-components'
import Menu from './Menu'
import { postData } from "../posts/postData"
import Link from 'next/link'
import { useEffect, useState } from "react";

const NavStyled = styled.nav`
position: fixed;
top: 0;
left: 0;
background: blue;
transition: all 0.2s ease-in;
transform: ${({ toggled }) => toggled ? 'translateX(0)' : 'translateX(-100%)'};
button{
  position: absolute;
  right: -50px;
  top: 0;
  width: 50px;
  height: 50px;
}

a{
  color: var(--white,#fff);
}
`

export default function Nav() {
  const [toggled, setToggled] = useState(false)
  return (
    <NavStyled toggled={toggled}>
      <button onClick={() => setToggled(!toggled)}>
        JM
      </button>
      <Menu >
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