import styled from 'styled-components'

const MenuList = styled.ul`

`

export default function Menu({ children }) {
  return (
    <MenuList>
      {children}
    </MenuList>
  )
}