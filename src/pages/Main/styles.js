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
    top: 10%;
    left: 50%;
    transform: translateX(-80%);
  }
`;

export const ActionBox = styled.div`
  position: absolute;
  top: 25%;
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
