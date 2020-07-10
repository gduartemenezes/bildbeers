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
  background: rgba(72, 60, 90, 0.2);
  border-radius: 8px;
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow-y: scroll;
`;

export const BeerList = styled.ul`
  margin: 20px auto;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 40px;
  li {
    cursor: pointer;

    background: transparent;
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
      padding: 0 15px;
    }

    &:hover {
      transform: scale(1.15);
      filter: brightness(80%);
      background: rgba(210, 210, 210, 0.8);
    }
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  background: rgba(72, 60, 90, 0.7);
  color: #fff;
  border-radius: 4px;
  text-align: left;
  height: 250px;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    strong {
      font-size: 60%;
      margin: 10px 10px 0;
    }
    span {
      margin: 10px 10px 0;
      font-size: 80%;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      line-height: 140%;
    }

    & + div {
      margin-top: 5px;
      padding-top: 5px;
      border-top: 1px solid #ccc;
    }
  }
`;
