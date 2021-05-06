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

a{
  color: var(--white,#fff);
}
`

const LogoButton = styled.button`
  position: absolute;
  right: -50px;
  top: 0;
  width: 50px;
  height: 50px;
  font-size: 2rem;
  margin: 0;
  padding: 0;
  outline: none;
  border: none;
  color: var(--white, #fff);
  background-color: var(--black, #000);
  cursor: pointer;
`

export default function Nav() {
  const [toggled, setToggled] = useState(false)
  return (
    <NavStyled toggled={toggled}>
      <LogoButton onClick={() => setToggled(!toggled)}>
        JM
      </LogoButton>
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