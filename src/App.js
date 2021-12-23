import React from 'react';
import { Result } from './components/Result';
import { Typing } from './components/Typing';
import { Welcome } from './components/Welcome';

function App() {
  const [step, setStep] = React.useState('welcome');

  const startGame = () => {
    setStep('typing');
  };

  const steps = {
    welcome: <Welcome onClickStart={startGame} />,
    typing: <Typing />,
    result: <Result />,
  };
  return (
    <div className="App">
      <div className="common-rect">{steps[step]}</div>
    </div>
  );
}

export default App;
