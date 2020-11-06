import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'

export const Link = styled(LinkRouter)`
  border-radius: 8px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, .3);
  display: inline-block;
  overflow: hidden;
  position: relative;
`

export const Grid = styled.div`
  padding-top: 32px;
  display: grid;
  grid-template: 1fr / 1fr 1fr 1fr;
  gap: 1em;
`

export const Image = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`
