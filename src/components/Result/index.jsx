import React from 'react';

export const Result = ({ stats, onClickStart }) => {
  return (
    <div className="flex result">
      <div className="result__top-icon">
        {stats.words <= 5 ? '😓' : stats.words > 5 && stats.words <= 10 ? '😊' : '😅'}
      </div>
      <p className="result__phrase">
        {stats.words <= 5
          ? 'Прибавь, улиточка... 🐌'
          : stats.words > 5 && stats.words <= 10
          ? 'Неплохо! Но я знаю, что ты можешь лучше :)'
          : 'Да ты просто ураган!'}{' '}
        За <b>{stats.sec} секунд</b>, ты ввел:
      </p>
      <div className="result__number-of-words">
        {stats.words} слов{stats.words === 1 ? 'о' : stats.words > 1 && stats.words < 5 ? 'а' : ''}
      </div>
      <button onClick={onClickStart} className="button">
        🤔 Попробовать снова?
      </button>
    </div>
  );
};
