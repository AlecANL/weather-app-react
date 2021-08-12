import styled from 'styled-components';
import img from './assets/images/nigth-rain.jpg';

export const AppStyled = styled.div`
  block-size: 100vh;
  background-image: url(${img});
  overflow: hidden;
  /* padding-inline: 1rem; */
  background-size: cover;
  background-position: bottom center;
  background-repeat: no-repeat;
  h1 {
    margin: 0;
  }
`;
