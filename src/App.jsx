import React from 'react';
import './App.css'
import Blanks from './Blanks';
import Keyboard from './Keyboard';
import { nanoid } from "nanoid"
import chooseRandom from "./Words.jsx"
import Confetti from './Confetti.jsx'
import pic0 from "./pic0.jpg"
import pic1 from "./pic1.jpg"
import pic2 from "./pic2.jpg"
import pic3 from "./pic3.jpg"
import pic4 from "./pic4.jpg"
import pic5 from "./pic5.jpg"
import pic6 from "./pic6.jpg"
import pic7 from "./pic7.jpg"
import pic8 from "./pic8.jpg"


export default function App() {

  const pics = [pic0, pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8];

  const [word, setWord] = React.useState(() => chooseRandom());
  function splitLetters(currentWord) {
    return currentWord.split("").map((letter) => ({ value: letter, isHeld: false, }))
  }
  function generateLetters(currentWord) {
    const s = "qwertyuiopasdfghjklzxcvbnm";
    const x = s.split("").map((letter) => ({
      value: letter,
      isHeld: false,
      isWanted: currentWord.includes(letter),
      id: letter
    }));
    return x; // Return the transformed array
  }
  
  const [keyboardButtons, setKeyboardButtons] = React.useState(() => generateLetters(word.word));
  const [wordLetters, setWordLetters] = React.useState(() => splitLetters(word.word));
  const [wrongCount, setWrongCount] = React.useState(0);
  const newGameButtonRef = React.useRef(null);

  const gameWon = wordLetters.every(letter => letter.isHeld);
  const gameLost = wrongCount >= 8 ? true : false;



  const buttonLetters = keyboardButtons.map((letter) =>
    <Keyboard
      key={letter.id}
      value={letter.value}
      isHeld={letter.isHeld}
      isWanted={letter.isWanted}
      id={letter.id}
      hold={hold}
      match={!gameWon && !gameLost}
    />
  )


  function hold(id) {
    setKeyboardButtons(oldState =>
      oldState.map((button) => {
        if (button.id === id && !button.isHeld && !(word.word).includes(id)) { setWrongCount((prev) => prev + 1); }

        return button.id === id ? { ...button, isHeld: true } : button
      }
      ))
    setWordLetters((oldState) =>
      oldState.map((prev) =>
        id === prev.value ? { ...prev, isHeld: true } : prev
      ))

  }


  React.useEffect(() => {

    function handle(event) {
      hold(event.key);
    }
    if(!(gameLost||gameWon))window.addEventListener("keydown", handle);
    return () => window.removeEventListener("keydown", handle);
  },[hold, gameLost ,gameWon])



  const firstRow = buttonLetters.slice(0, 10);
  const secondRow = buttonLetters.slice(10, 19);
  const thirdRow = buttonLetters.slice(19, 26);

  const blanks = wordLetters.map((letter) =>
    <Blanks
      key={nanoid()}
      value={letter.value}
      isHeld={letter.isHeld}
    />
  )


  function handleNewGame() {
    const newWord = chooseRandom(); // Choose a new word first
    setWord(newWord); // Set the new word
    setKeyboardButtons(() => generateLetters(newWord.word)); // Pass the new word to generate letters
    setWordLetters(() => splitLetters(newWord.word)); // Update word letters
    setWrongCount(0); // Reset the wrong count
  }
  
  React.useEffect(() =>{
    if(newGameButtonRef!==null&&(gameLost||gameWon)){
      newGameButtonRef.current.focus();
    }
  },[gameLost,gameWon]); 
 const pic = pics[wrongCount];





 
  return (
    <div className='container'>
      <h1>Hangman Game</h1>
      <h4>Guess the word in under 8 attepmts to keep the man alive!</h4>
      {gameWon && <h2 className='game-won'>Thanks for saving my life</h2>}
      {gameLost && <h2 className="game-lost"> You killed meee</h2>}
      {(gameLost || gameWon) && <div>
                <p className='answer'>answer: {word.word}</p>
        </div>
         }
         <p className='answer'>hint: {word.hint}</p>
      <img src={pic} width="100px" />
      <div className='blanks-container'>
        {blanks}
      </div>
      <div className='keyboard-buttons'>
        <div>
          {firstRow}
        </div>
        <div>
          {secondRow}
        </div>
        <div>
          {thirdRow}
        </div>
      </div>
      <button className='new-game-button' onClick={handleNewGame} ref={newGameButtonRef}>New Game</button>
      {gameWon && <Confetti />}
    </div>
  )
}


