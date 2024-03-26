import React, { useState } from 'react';

import "./Styles/index.scss";

interface IProps 
{
  name: string | undefined
  farm: string | undefined
  thing: string | undefined
}

function App() {

  const [menu, setMenu] = useState('field_empty')

  const [props, setProps] = useState<IProps>({name: "", farm: "", thing: ""});


  return (
    <div className="App" style={{ backgroundImage: 'url(background.png)'}}>
      <div className="menu" style={{ backgroundImage: `url(/menu/${menu}.png)`}}>

        <form className='stardew_fields'>
          <input type="text" className='field' value={props.name} onChange={(e) => setProps({...props, name: e.target.value})}/>
          <input type="text" className='field' value={props.farm} onChange={(e) => setProps({...props, farm: e.target.value})}/>
          <input type="text" className='field' value={props.thing} onChange={(e) => setProps({...props, thing: e.target.value })}/>
        </form>

      </div>
    </div>
  );
}

export default App;
