import React from 'react';

export const Welcome = () => {
  return (
    <div class="flex start">
      <img
        class="start__image"
        width="50"
        src="https://speed-words.vercel.app/static/media/flag.1fffd39b.png"
        alt="Флаг"
      />
      <div class="start__text">
        <h3 class="start__header">speed words</h3>
        <p class="start__phrase">Игра на скорость ввода слов</p>
      </div>
      <button class="button">🔥 Начать</button>
    </div>
  );
};
