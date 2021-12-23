import React from 'react';

export const Result = () => {
  return (
    <div className="flex result">
      <div className="result__top-icon">😊</div>
      <p className="result__phrase">
        Неплохо! Но я знаю, что ты можешь лучше! За <b>20 секунд</b>, ты ввел:
      </p>
      <div className="result__number-of-words">7 слов</div>
      <button className="button">🤔 Попробовать снова?</button>
    </div>
  );
};
