import Link from 'next/link';
import styled from 'styled-components'

const HeroStyled = styled.div`
display: flex;
align-self: center;
text-transform: uppercase;
color: var(--white,#fff);
max-width: 500px;
text-align: center;
flex-direction: column;

h1,h3{
  margin: 0 0 1rem;
  background: var(--black);
}

h1{
  font-size: 4rem;
}
h3{
  font-size: 1.5rem;
}
span{
  padding: 1rem 0.2rem;
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