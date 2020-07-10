import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #352f44;
  width: 100%;

  img {
    height: 75px;
    margin-left: 30px;
  }
  ul {
    display: flex;
    flex-direction: row;
    padding: 0;
    li {
      cursor: pointer;
      list-style: none;
      color: #fff;
      margin: 10px 20px;
      font-size: 80%;
      padding: 0;
      &:hover {
        opacity: 0.7;
      }
    }
    a {
      text-decoration: none;
    }
  }
`;
