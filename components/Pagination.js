import Link from 'next/link'
import styled from 'styled-components'

const PaginationStyles = styled.div`
display: flex;
justify-content: space-between;
padding-top: 2rem;
a[aria-disabled='true'] {
  color: grey;
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
