import styled from 'styled-components'

const PictureStyled = styled.picture`
  min-height: 300px;

  @media screen and (min-width: 768px){
    min-height: 400px
  }

  @media screen and (min-width: 1024px){
    min-height: 563px
  }
`

export default function Picture({ url, alt }) {
  return (
    <PictureStyled>
      <source srcSet={`${url}`} media="(min-width: 1024px)" />
      <source srcSet={`${url}`} media="(min-width: 740px)" />
      <img src={`${url}?nf_resize=fit&w=500`} alt={alt} />
    </PictureStyled>
  )
}