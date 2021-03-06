import styled from 'styled-components'
import Menu from './Menu'
import { postData } from "../posts/postData"
import Link from 'next/link'
import { useState } from "react";

// styled navigation menu
const NavStyled = styled.nav`
position: fixed;
top: 0;
left: 0;
background: var(--black, #000);
transition: all 0.3s ease-in;
transform: ${({ toggled }) => toggled ? 'translateX(0)' : 'translateX(-100%)'};
min-height: 100vh;
margin: 0;
z-index: 999;

li{
  list-style: none;
  padding: 1rem 1.2rem;
  color: var(--white,#fff);
  cursor: pointer;
  background: rgba(0,0,0,0.0);
  transition: background 0.2s ease-in;
  &:hover{
    background: rgba(58,58,58,1.0);
  }
}
`
// the button for the nav menu
const LogoButton = styled.button`
  position: absolute;
  right: 0;
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
  transition: all 0.3s ease-in;
  transform: ${({ toggled }) => toggled ? 'translateX(0%)' : 'translateX(100%)'};

  &:hover{
    background-color: var(--grey, #3a3a3a);
  }
`

export default function Nav() {
  const [toggled, setToggled] = useState(false)
  return (
    <NavStyled toggled={toggled}>
      <LogoButton toggled={toggled} onClick={() => setToggled(!toggled)}>
        JM
      </LogoButton>
      <Menu>
        <Link href='/'>
          <li>Return Home</li>
        </Link>
        {postData.map(post => (
          <Link key={post.id} href={`/posts/${post.id}`}>
            <li onClick={() => setToggled(!toggled)}>
                {post.name}
            </li>
          </Link>
        ))}
        <Link href='/tools'>
          <li>Tools Used</li>
        </Link>
      </Menu>
    </NavStyled>
  )
}