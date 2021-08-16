import styled from 'styled-components';

export const WeatherCardStyled = styled.div`
  position: absolute;
  bottom: 6rem;
  transform: translate(-50%, 0);
  z-index: 10;
  left: 50%;
  display: flex;
  justify-content: center;
  gap: 1rem;
  inline-size: 14.6875rem;
  padding: 1.5rem;
  background: linear-gradient(90deg, #536976 0%, #292e49 100%);
  border-radius: 0.5rem;
  transition: transform 0.3s ease-in-out;
  &.is-active {
    transform: translate(-50%, -300%);
  }
  .current-degrees span {
    font-size: 3rem;
    line-height: 2.625rem;
  }
  .current-placement {
    font: var(--caption-caption);
  }
  .current-date {
    display: flex;
    gap: 2px;
  }
  .location {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-block-start: 0.5rem;
  }
`;
