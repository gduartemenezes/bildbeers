import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  align-self: center;
  justify-content: space-between;
  width: 1200px;
  /* background: rgba(220, 220, 220, 0.7); */
  border-radius: 8px;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  margin: auto;
  display: flex;
  /* align-items: center;
  justify-content: center; */
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  background: ${lighten(0.1, '#352f44')};
  border-radius: 10px;
  padding: 10px 0;
  width: 600px;
`;

export const UserInfo = styled.div`
  color: #fff;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  max-width: 600px;

  img {
    border-radius: 10%;
    width: 150px;
    padding: 5px;
  }

  ul {
    li {
      span {
        margin: 0 10px;
        font-size: 80%;
      }
      strong {
        font-size: 90%;
      }
      & + li {
        margin-top: 10px;
      }
    }
  }
`;

export const UserBio = styled.div`
  color: #fff;

  margin-top: 10px;
  padding: 10px;
  border-top: 1px solid #222;

  ul {
    display: flex;
    align-items: center;
    flex-direction: column;

    li {
      width: 500px;
      h4 {
        font-size: 80%;
        text-align: center;
        text-indent: 1ch;
      }
      p {
        padding: 0 15px;
        line-height: 170%;
        text-align: justify;
        font-size: 70%;
      }
      & + li {
        margin-top: 5px;
        padding-top: 5px;
        border-top: 1px solid #222;
      }
    }
  }
`;

export const Beers = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  /* background: ${lighten(0.4, '#352f44')}; */
  border-radius: 4px;
  padding: 10px 0;
`;

export const BeerCard = styled.ul`
  background: #fff;
  margin-top: 10px;
  opacity: 0.9;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 550px;
  position: relative;
  float: left;
  border-radius: 10px;
  li {
    margin-left: 40px;
    img {
      padding: 10px;
      width: 50px;
    }
    span {
      /* margin: 0 10px; */
      font-size: 80%;
    }
    strong {
      padding: 0 10px;
      font-size: 80%;
    }
    & + li {
      margin-top: 10px;
    }
  }
`;
