import styled from 'styled-components';

export const HomeStyled = styled.div`
  ${({ image }) => console.log(image)};
  background-image: ${({ image }) => `url(${image})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  inline-size: 100vw;
  block-size: 100vh;
  background-color: #ccc;
  @media screen and (min-width: 768px) {
    min-block-size: 100vh;
  }
`;
