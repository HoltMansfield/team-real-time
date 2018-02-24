import styled from 'styled-components'
import { Link } from 'react-router-dom'


export const StyledLink = styled(Link)`
  :link {
    text-decoration: none;
    color: black;
  }
  :visited {
    color: black;
  }
  :hover {
    text-decoration: underline;
  }
`
