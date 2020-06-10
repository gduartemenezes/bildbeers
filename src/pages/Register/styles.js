import styled from 'styled-components';

import hop from '../../assets/hop.png';

export const Page = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${hop});
  background-size: cover;
  height: 100vh;
`;

export const Container = styled.div`
  width: 900px;
  background: #eee;
  height: 500px;
  padding: 0;
  border-radius: 8px;
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Info = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 200px;
    height: 200px;
  }

  p {
    margin: 30px 0;
    line-height: 170%;
    text-align: center;
  }

  a {
    text-decoration: none;
    color: #555;
    font-size: 80%;
  }
  a:hover {
    opacity: 0.6;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 70px auto;
`;
export const Input = styled.input`
  width: 350px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;

  & + input {
    margin-top: 15px;
  }
`;
export const SubmitButton = styled.button`
  margin-top: 30px;
  width: 300px;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #c3410e;
  background: #c3410e;
  color: #fff;
  transition: background 0.5s color 0.5s;

  &:hover {
    background: #94310a;
    color: #ccc;
  }
`;