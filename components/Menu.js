import styled from 'styled-components'

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