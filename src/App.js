import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/index';
import './config/ReactotronConfig';
import GlobalStyle from './styles/global';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
