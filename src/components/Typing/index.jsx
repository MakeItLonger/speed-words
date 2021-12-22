import React from 'react';

export const Typing = () => {
  return (
    <div class="flex typing">
      <p class="typing__enter-word">Введите слово:</p>
      <h3 class="typing__word">Первое слово</h3>
      <input className="typing__input" type="text" autoFocus={true} />
      <div class="typing__progress">
        <div class="typing__timer">
          <p>Осталось времени:</p>
          <b>20 сек.</b>
        </div>
        <div class="typing__counter">
          <p>Введено слов:</p>
          <b>0</b>
        </div>
      </div>
    </div>
  );
};
