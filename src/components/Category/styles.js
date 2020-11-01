import styled, { css, keyframes } from 'styled-components';

export const Link = styled.a`
  display: inline-flex;
  flex-direction: column;
  text-align: center;
  text-decoration: none;
  width: 75px;
`

export const Image = styled.img`
  border: 1px solid #ddd;
  box-shadow: 0 10px 14px rgba(0, 0, 0, .2);
  border-radius: 50%;
  height: auto;
  overflow: hidden;
  object-fit: cover;
  min-height: 75px;
  width: 75px;
`

const skeletonLoading = keyframes`
  from {
      background-position: 0% 0%;
  }
  to {
      background-position: -135% 0%;
  }
`;
const skeletonBackground = (light) => (
  css`
      background: ${ !light
          ? css`linear-gradient(-90deg, #C1C1C1 0%, #F8F8F8 50%, #C1C1C1 100%)`
          : css`linear-gradient(-90deg, #F0F0F0 0%, #F8F8F8 50%, #F0F0F0 100%)`};
          background-size: 400% 400%;
          animation: ${skeletonLoading} 1.2s ease-in-out infinite;
  `
)

const skeletonStyle = (light = true) => skeletonBackground(light);

export const ContainerCategorySkeleton = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const CategoryImage = styled.div`
    width: 75px;
    height: 75px;
    border-radius: 50%;
    ${
        props => css`
            ${skeletonStyle(props.light)}
        `
    }
`;

export const CategoryTitle = styled.div`
    width: 26px;
    height: 15px;
    margin-top: 8px;
    ${
        props => css`
            ${skeletonStyle(props.light)}
        `
    }
`;