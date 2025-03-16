import './App.css';
import { Button } from '@carbon/react';
import { clickButton } from './components/MyComponents';
import GreetFromMe from './components/Greetings';
import { SetCount } from './components/Count';

function Apps() {
  const handleClick = () => {
    console.log("print it now");
    alert('Hello World, I am exploring react and it feels awesome!! 😎');
  };

  return(
    <div>
      <Button onClick={handleClick}>Will you clioioyck me please??</Button>
      <GreetFromMe thisisname = {true} />
      <SetCount />
    </div>
  );
}

export default Apps;
