import styled from 'styled-components';

export const WidgetWeatherStyled = styled.div`
  display: flex;
  flex-shrink: 0;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  inline-size: 65px;
  block-size: 7rem;
  padding-block: 1rem;
  padding-inline: 0.75rem;
  border-radius: 3.625rem;
  background-color: var(--black);
  cursor: pointer;
  .hour {
    font: var(--body2-regular);
  }
  .degrees {
    font: var(--body1-bold);
  }
`;
