import { css, keyframes } from 'styled-components'

const fadeInKeyFrames = keyframes`
  from {
    filter: blur(5px);
    opacity: 0;
  }
  to {
    filter: blur(0);
    opacity: 1;
  }
`
const appearFromTopKeyframes = ({from, to}) => keyframes`
 from {
   top: ${from}
 }
 to {
   top: ${to}
 }
`

export const appearFromTop = ({time = '1s', type = 'cubib-bezier(.18,.89,.32,1.28)', from, to} = {}) => (css`
  animation: ${time} ${appearFromTopKeyframes(from, to)} ${type}
`)

export const fadeIn = ({ time = '1s', type = 'ease' } = {}) => (css`
  animation: ${time} ${fadeInKeyFrames} ${type}
`)

