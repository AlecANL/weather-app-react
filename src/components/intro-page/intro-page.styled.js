import styled from 'styled-components';

export const MainStyled = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-inline: 1rem;
  min-block-size: calc(100vh - 105px);
  background: linear-gradient(90deg, #536976 0%, #292e49 100%);
  @media screen and (min-width: 768px) {
    min-block-size: 100vh;
  }
`;
