import './App.css';
import { Button } from '@carbon/react';
import { clickButton } from './components/MyComponents';
import GreetFromMe from './components/Greetings';
import { SetCount } from './components/Count';
import MyTodoList from './components/Lists';

function Apps() {
  const handleClick = () => {
    console.log("print it now");
    alert('Hello World, I am exploring react and it feels awesome!! 😎');
  };

  const tasks = ["wake up", "Workout", "Breakfast","Code React", "Deploy"];

  return(
    <div>
      <Button onClick={handleClick}>Will you clioioyck me please??</Button>
      <GreetFromMe thisisname = {true} />
      <SetCount />
      <MyTodoList tasks={tasks}/>
    </div>
  );
}

export default Apps;
