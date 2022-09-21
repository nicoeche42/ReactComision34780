import React from 'react';
import logo from './logo.svg';
import './App.css';
import AvatarJsx from './components/AvatarJsx/AvatarJsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Bienvenidos Comision 34780
        </p>
        {React.createElement('h1', {}, 'Sin JSX')}
         <AvatarJsx />
      </header>
    </div>
  );
}

export default App;
