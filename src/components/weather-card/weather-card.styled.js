import styled from 'styled-components';

export const WeatherCardStyled = styled.div`
  position: absolute;
  bottom: 6rem;
  z-index: 10;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  gap: 1rem;
  inline-size: 14.6875rem;
  padding: 1.5rem;
  background: linear-gradient(90deg, #536976 0%, #292e49 100%);
  border-radius: 0.5rem;
  .current-degrees span {
    font-size: 3.5rem;
    line-height: 2.625rem;
  }
  .current-placement {
    font: var(--caption-caption);
  }
  .location {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-block-start: 0.5rem;
  }
`;
