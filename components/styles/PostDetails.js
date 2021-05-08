import styled from 'styled-components'

const PostDetails = styled.div`
  margin: 0 auto;
  max-width: var(--maxWidth);
  background: var(--black);
  color: var(--white, #fff);
  padding: 1rem;
  position: relative;

  &:before{
    content: '';
    border: 16px solid var(--black);
    border-color: transparent transparent var(--black) transparent;
    position: absolute;
    top: -50px;
    left: 50%;
    transform: translateX(-50%);
  }
`

export default PostDetails