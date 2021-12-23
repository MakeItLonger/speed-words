import React from 'react';

const quotes = [
  'Вы никогда не пересечете океан, если не наберетесь мужества потерять берег из виду',
  'Как прекрасно, что не нужно ждать ни минуты, чтобы начать делать мир лучше',
  'Когда я освобождаюсь от того, кто я есть, я становлюсь тем, кем я могу быть',
  'Каждый хочет изменить человечество, но никто не задумывается о том, как изменить себя',
  'Не столь важно, как медленно ты идешь, как то, как долго ты идешь, не останавливаясь',
  'Мудрый человек требует всего только от себя, ничтожный же человек требует всего от других',
];

const sentence = quotes[Math.floor(Math.random() * quotes.length)];
const words = sentence.split(' ');

export const Typing = () => {
  const curIndexRef = React.useRef(0);
  const [sec, setSec] = React.useState(20);
  const [currentWord, setCurrentWord] = React.useState(words[0]);
  const [inputValue, setInputValue] = React.useState('');
  const [wordsCount, setWordsCount] = React.useState(0);
  const [isError, setIsError] = React.useState(false);

  const onChangeInput = (e) => {
    const { value } = e.target;

    if (currentWord === value) {
      curIndexRef.current += 1;
      setCurrentWord(words[curIndexRef.current]);
      setInputValue('');
      setWordsCount((prev) => prev + 1);
      return;
    }

    if (!new RegExp(`^${value}`).test(currentWord)) {
      setIsError(true);
    } else {
      setIsError(false);
    }

    setInputValue(value.trim());
  };

  return (
    <div class="flex typing">
      <p class="typing__enter-word">Введите слово:</p>
      <h3 class="typing__word">{currentWord}</h3>
      <input
        value={inputValue}
        onChange={onChangeInput}
        className={`typing__input ${isError ? 'error' : ''}`}
        type="text"
        autoFocus={true}
      />
      <div class="typing__progress">
        <div class="typing__timer">
          <p>Осталось времени:</p>
          <b>{sec} сек.</b>
        </div>
        <div class="typing__counter">
          <p>Введено слов:</p>
          <b>{wordsCount}</b>
        </div>
      </div>
    </div>
  );
};
