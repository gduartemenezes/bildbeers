import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-self: center;
  flex-direction: column;
  justify-content: space-between;
  width: 900px;
  margin: auto;
  border-radius: 8px;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);

  form {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    background: #352f44;
    opacity: 0.9;
    border-radius: 10px;
    select {
      background: transparent;
      color: #fff;
      width: 100px;
      height: 50px;
      font-size: 14px;
      padding: 5px;
      border-radius: 4px;
      margin: 10px 40px 10px 0;
      padding: 4px 8px;
    }

    option {
      height: 50px;
      background: #4c4462;
      font-size: 14px;
      padding: 8px 16px;
    }

    input {
      margin: 10px 10px 10px 0;
    }

    span {
      color: #fff;
    }

    input.search-field {
      padding: 5px 15px;
      color: #444;
      background: #eee;
      width: 500px;
      height: 30px;
      border-radius: 8px;
      font-size: 80%;
    }
  }

  button {
    margin-left: 15px;
    width: 80px;
    height: 40px;
    font-size: 80%;
    font-weight: bold;
    border-radius: 10px;
    background: #6c608a;
    color: #fff;
    border: 0;
    transition: background 0.2s, color 0.2s;

    &:hover {
      background: #fff;
      color: #4c4462;
    }
  }
`;

export const SearchResults = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  border-radius: 4px;
  padding: 10px 0;
  margin: 0 auto;
`;

export const SearchCard = styled.ul`
  background: #fff;
  margin-top: 10px;
  opacity: 0.9;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 600px;
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
