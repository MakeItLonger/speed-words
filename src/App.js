import React from 'react';
import { Result } from './components/Result';
import { Typing } from './components/Typing';
import { Welcome } from './components/Welcome';

function App() {
  const [step, setStep] = React.useState('welcome');
  const [stats, setStats] = React.useState({
    words: 0,
    sec: 0,
  });
  const durationGameSec = 20;

  const startGame = () => {
    setStep('typing');
  };

  const finishGame = (words, sec) => {
    sec = durationGameSec - sec;
    setStep('result');
    setStats({
      words,
      sec,
    });
  };

  const steps = {
    welcome: <Welcome onClickStart={startGame} />,
    typing: <Typing time={durationGameSec} onFinish={finishGame} />,
    result: <Result onClickStart={startGame} stats={stats} />,
  };

  return (
    <div classNameName="App">
      <div className="common-rect">{steps[step]}</div>
    </div>
  );
}

export default App;
