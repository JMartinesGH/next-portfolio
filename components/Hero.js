import Link from 'next/link';
import styled from 'styled-components'

const HeroStyled = styled.div`
display: flex;
align-self: center;
text-transform: uppercase;
color: var(--white,#fff);
max-width: 800px;
text-align: center;
flex-direction: column;

h1,h3{
  margin: 0 0 2rem;
  background: var(--black);
}

h1{
  font-size: 6rem;
}
h3{
  font-size: 2.5rem;
}
h4 a{
  background: var(--black);
  font-size: 1.75rem;
  padding: 1rem;
  color: white;
  text-decoration: none;
  &:hover{
    background: #3a3a3a;
  }
}
span{
  padding: 1.5rem 0.5rem;
}
`

const FlexWrapper = styled.div`
display: flex;
justify-content: center;
`

export default function Hero({ children }) {
  return (
    <FlexWrapper>
      <HeroStyled>
        {children}
      </HeroStyled>
    </FlexWrapper>
  )
}