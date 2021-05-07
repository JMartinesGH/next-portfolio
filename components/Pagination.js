import Link from 'next/link'
import styled from 'styled-components'

const PaginationStyles = styled.div`
display: flex;
justify-content: space-between;
padding-top: 2rem;
a{
  background: #000;
  color: #fff;
  padding: .75rem;
  transition: background-color 0.3s ease-in;
}

a:hover{
  background-color: #3a3a3a;
  text-decoration: none;
}

a[aria-disabled='true'] {
  color: white;
  background-color: #7d7d7d;
  pointer-events: none;
}
`

export default function Pagination({ page, count }) {

  return (
    <PaginationStyles>
      <Link href={`/posts/${page - 1}`}>
        <a aria-disabled={page <= 1}>← Prev</a>
      </Link>
      <Link href={`/posts/${page + 1}`}>
        <a aria-disabled={page >= count}>Next →</a>
      </Link>
    </PaginationStyles>
  )
}
