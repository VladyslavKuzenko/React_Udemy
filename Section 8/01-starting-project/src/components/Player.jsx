import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef();
  const [enteredPlayerName, setEnteredPlayerName] = useState("");

  function handleClick() {
    setEnteredPlayerName(playerName.current.value);
    playerName.current.value='';
  }

  return (
    <section id="player">
      {/* <h2>Welcome {enteredPlayerName ? enteredPlayerName : "unknown"}</h2> */}
      {/* Спеціальний  JS синтаксис ??. Він повертає в результат значення яке ми перевіряємо якщо перевірка true, щоб не писати як в попередньому рядку*/}
      <h2>Welcome {enteredPlayerName ?? "unknown"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
