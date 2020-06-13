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
  background: rgba(200, 200, 200, 0.4);
  border-radius: 8px;
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BeerList = styled.ul`
  margin: 20px auto;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 40px;
  li {
    cursor: pointer;

    background: rgba(72, 60, 90, 0.4);
    border-radius: 8px;
    padding: 10px;
    max-width: 300px;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
    transition: transform 0.7s, background 0.4s;
    img {
      height: 200px;
      margin: 15px;
    }

    &:hover {
      transform: scale(1.15);
      filter: brightness(80%);
      background: #6c608a;
    }
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  background: #352f44;
  color: #fff;
  border-radius: 4px;
  span {
    font-size: 70%;
    font-weight: bold;
    margin: 10px 5px 0 0;
  }
  p {
    margin: 0 10px;
    font-size: 80%;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    line-height: 140%;
  }
`;
