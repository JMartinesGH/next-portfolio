import styled from 'styled-components'

const PostStyled = styled.div`
margin: 0 auto;
max-width: var(--maxWidth);
min-height: 100vh;

h1{
  display: flex;
  justify-content: space-between;
  a{
    color: white;
    text-decoration: none;
  }
  span{
    margin: 0 0 1rem 8rem;
    background: var(--black);
    color: var(--white, #fff);
    padding: 1rem 0.5rem;

    @media screen and (min-width: 1024px){
      margin: 0 0 1rem;
    }
  }
  .link-out:hover{
    background: #3a3a3a;
  }
}

div.carousel-wrapper{
  max-width: var(--maxWidth);
  width: 100%;
  max-height: 563px;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

img{
  width: 100%;
  height: 100%;
  object-fit: scale-down;
}
`

export default PostStyled