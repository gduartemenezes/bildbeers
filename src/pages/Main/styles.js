import styled from 'styled-components';
import bar from '../../assets/bar.jpg';

export const Container = styled.section`
  background-image: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)),
    url(${bar});
  background-size: cover;
  background-position: center;
  min-height: 100vh;

  h1 {
    color: #fff;
    font-weight: 300;
    line-height: 145%;
    font-size: 200%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-80%);
  }
`;

export const ActionBox = styled.div`
  position: absolute;
  top: 65%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;

  a {
    text-decoration: none;
    padding: 15px;
    margin-left: 30px;
    background: #c3410e;
    border: 1px solid #c3410e;
    color: #fff;
    border-radius: 20px;
  }
  a:hover {
    filter: brightness(65%);
  }
  a.btn-beers {
    color: #c3410e;
    background: transparent;
    border: 1px solid #c3410e;
    transition: color 1s, background 1s;
  }

  a.btn-beers:hover {
    color: #fff;
    background: #c3410e;
    border: 1px solid #c3410e;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: top;
  justify-content: space-between;
  padding: 20px;

  img {
    width: 100px;
    margin-left: 30px;
  }

  ul {
    display: flex;
    flex-direction: row;

    li {
      cursor: pointer;
      list-style: none;
      color: #FFF;
      margin: 10px 20px;
      font-size: 120%;
      padding: 0;

      &:hover {
        opacity: 0.7;
      }
    }
  }
`;

