import styled from 'styled-components'

// list wrapper for nav
const MenuList = styled.ul`
padding: 0;
`

export default function Menu({ children }) {
  return (
    <MenuList>
      {children}
    </MenuList>
  )
}