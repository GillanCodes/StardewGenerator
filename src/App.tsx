import React, { useState } from 'react';

import "./Styles/index.scss";

function App() {

  const [menu, setMenu] = useState('field_empty')


  return (
    <div className="App" style={{ backgroundImage: 'url(background.png)'}}>
      <div className="menu" style={{ backgroundImage: `url(/menu/${menu}.png)`}}>

      </div>
    </div>
  );
}

export default App;
