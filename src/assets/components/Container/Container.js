import styled from 'styled-components';

const Container = styled.div`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.fontColor};
  height: 100vh;
  max-width: 600px;
  width: 60vw;
  min-width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default Container;