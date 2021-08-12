import styled from 'styled-components';

export const NavWeatherStyled = styled.div`
  position: absolute;
  inset-inline: 0;
  inset-block-end: 0;
  padding-inline: 1rem;
  padding-block: 1rem;
  border-start-start-radius: 1.5rem;
  border-start-end-radius: 1.5rem;
  background-color: var(--bg);
  transform: translateY(90%);
  transition: transform 0.3s ease-in-out;
  will-change: transform;
  &.is-active {
    transform: translateY(0);
  }
  .line {
    margin: 0 auto;
    inline-size: 64px;
    block-size: 4px;
    background-color: var(--white);
    border-radius: 5px;
    cursor: pointer;
  }
  .tab-day {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    padding-block: 1rem;
    font: var(--body1-regular);
    overflow: auto;
    span {
      cursor: pointer;
    }
    /* span:nth-child(1) {
      padding-inline-start: 3rem;
    } */
  }
  .weather-widgets {
    display: flex;
    box-sizing: border-box;
    gap: 1rem;
    padding-block: 1rem;
    overflow: auto;
  }
`;
