import React, { useEffect, useState } from 'react';

import "./Styles/index.scss";
import randomizer from "./randomizer.json";
import { isEmpty } from './Utils';


interface IProps 
{
  name: string | undefined
  farm: string | undefined
  thing: string | undefined
}

function getRdm(length:number)
{
  return Math.floor(Math.random() * length); 
}



function App() {

  const [menu, setMenu] = useState('field_empty')

  const [props, setProps] = useState<IProps>({name: "", farm: "", thing: ""});
  const [gender, setGender] = useState(1);
 
  useEffect(() => {
    if (!isEmpty(props.name) && !isEmpty(props.farm) && !isEmpty(props.thing)) setMenu('field_not_empty');
    else setMenu('field_empty');
  }, [props]);

  function randomize()
  {
    setProps({
      name: randomizer.name[getRdm(randomizer.name.length)],
      farm: randomizer.farm[getRdm(randomizer.farm.length)],
      thing: randomizer.thing[getRdm(randomizer.thing.length)]
    })
  }

  return (
    <div className="App" style={{ backgroundImage: 'url(background.png)'}}>
      <div className="menu" style={{ backgroundImage: `url(/menu/${menu}.png)`}}>

        <button className='random' style={{backgroundImage: "url(/menu/random_btn.png)"}} onClick={() => randomize()}></button>
        
        <div className="borders">
          <div className={`red_border ${gender === 0 ? "" : "none"}`} id='male' onClick={() => setGender(0)}></div>
          <div className={`red_border ${gender === 1 ? "" : "none"}`} id='female' onClick={() => setGender(1)}></div>
        </div>
        

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
