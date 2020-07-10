import styled from 'styled-components';
import { lighten } from 'polished';

export const Page = styled.div``;

export const Container = styled.div`
  width: 1200px;
  background: rgba(220, 220, 220, 0.9);
  border-radius: 8px;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.div`
  margin: 20px 120px 20px 0;
  float: left;
  img {
    width: 120px;
  }
`;

export const Info = styled.div`
  margin: 10px 0;
  display: flex;
  background: ${lighten(0.1, '#352f44')};
  max-width: 650px;
  flex-direction: column;
  align-items: left;

  padding: 10px 0;
`;

export const BeerInfo = styled.ul`
  margin: 0;
  color: #fff;
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
  a {
    color: #fff;
    cursor: pointer;
    margin: 0 auto;
    font-size: 80%;
  }
  a:hover {
    opacity: 0.6;
  }
`;

export const BeerTips = styled.div`
  color: #fff;

  margin-top: 10px;
  padding: 10px;
  border-top: 1px solid #222;

  ul {
    display: flex;
    align-items: center;
    flex-direction: column;

    li {
      width: 600px;
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
