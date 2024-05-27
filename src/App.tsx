import React, { useEffect, useState } from 'react';

import "./Styles/index.scss";
import randomizer from "./randomizer.json";
import { isEmpty } from './Utils';
import { log } from 'console';
import { ToastContextProvider, useToasts } from './Toast/ToastContext';


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

  const [props, setProps] = useState<IProps>({name: "", farm: "", thing: ""});
  const [gender, setGender] = useState(1);

  const { pushToast } = useToasts()
 
  function randomize()
  {

    if (gender === 0) setProps({
      ...props, 
      name: randomizer.name.male[getRdm(randomizer.name.male.length)],
      farm: randomizer.farm[getRdm(randomizer.farm.length)],
      thing: randomizer.thing[getRdm(randomizer.thing.length)]

    });
    if (gender === 1) setProps({
      ...props, 
      name: randomizer.name.female[getRdm(randomizer.name.female.length)],
      farm: randomizer.farm[getRdm(randomizer.farm.length)],
      thing: randomizer.thing[getRdm(randomizer.thing.length)]
    });
  }

  useEffect(() => {
    randomize();
  }, []) 

  const copyText = (element:any) => {
    element.target.classList.add('animation')
	  navigator.clipboard.writeText(element.target.value)
  }

  const test = (e:any) => {
    e.preventDefault();
    pushToast({
      title: "Field Copied",
      content: "Text has been copied on your clipboard"
    });
  }

  return (
    <ToastContextProvider>  
      <div className="App" style={{ backgroundImage: 'url(background.png)'}}>
        <div className="menu" style={{ backgroundImage: `url(/menu/field_not_empty.png)`}}>

          <button className='random' style={{backgroundImage: "url(/menu/random_btn.png)"}} onClick={() => randomize()}></button>
          
          <div className="borders">
            <div className={`red_border ${gender === 0 ? "" : "none"}`} id='male' onClick={() => setGender(0)}></div>
            <div className={`red_border ${gender === 1 ? "" : "none"}`} id='female' onClick={() => setGender(1)}></div>
          </div>
          

          <form className='stardew_fields'>
            <button onClick={(e) => test(e)}>test</button>
            <input type="text" className='field' value={props.name} onClick={(e:any) => copyText(e)} onAnimationEnd={(e:any) => e.target.classList.remove('animation')} />
            <input type="text" className='field' value={props.farm} onClick={(e:any) => copyText(e)} onAnimationEnd={(e:any) => e.target.classList.remove('animation')} />
            <input type="text" className='field' value={props.thing} onClick={(e:any) => copyText(e)} onAnimationEnd={(e:any) => e.target.classList.remove('animation')} />
          </form>

        </div>

        <a className='bmc' href="https://www.buymeacoffee.com/gillancodes" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174" /></a>
      </div>
    </ToastContextProvider>
  );
}

export default App;
