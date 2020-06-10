import styled from 'styled-components';

import hop from '../../assets/hop.png';

export const Page = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${hop});
  background-size: cover;
  height: 100vh;
`;

export const Container = styled.div`
  width: 1100px;
  background: #eee;
  border-radius: 8px;
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  align-items: center;
  justify-content: space-between;
`;
