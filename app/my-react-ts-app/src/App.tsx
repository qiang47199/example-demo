import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RouterConfig from './routers';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {
          RouterConfig.map((item) => {
            return <Route key={item.path} path={item.path} Component={item.component}/>
          })
        }
      </Routes>
  </BrowserRouter>
  );
}

export default App;
