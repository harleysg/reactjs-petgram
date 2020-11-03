import {css} from 'styled-components'

export const reset = css`
/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove default padding */
ul[class],
ol[class] {
  padding: 0;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
ul[class],
ol[class],
li,
figure,
figcaption,
blockquote,
button,
dl,
dd {
  margin: 0;
}

button {
  background: transparent; border: 0; outline: 0
}

/* Set core body defaults */
body {
  width: 100%;
  min-height: 100vh;
  height: 100vh;
  line-height: 1.5;
  margin: 0 auto;

  scroll-behavior: smooth;
  overscroll-behavior: none;
}

/* Remove list styles on ul, ol elements with a class attribute */
ul,
ol {
  list-style: none;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Remove all animations and transitions for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* width */
  ::-webkit-scrollbar {
    width: 5px;
    height: 3px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #dcc9c9;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background-image: linear-gradient(45deg, rgb(173, 67, 168), rgb(141, 0, 255))
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: rgb(141, 0, 255);
  }
`