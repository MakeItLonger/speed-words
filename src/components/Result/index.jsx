import React from 'react';

export const Result = () => {
  return (
    <div class="flex result">
      <div class="result__top-icon">😊</div>
      <p class="result__phrase">
        Неплохо! Но я знаю, что ты можешь лучше! За <b>20 секунд</b>, ты ввел:
      </p>
      <div class="result__number-of-words">7 слов</div>
      <button class="button">🤔 Попробовать снова?</button>
    </div>
  );
};
