"use client";

import { useEffect } from "react";
import "./styles.css"


async function submitGuess(guess: string) {

  const response = await fetch("/api/wordle", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      guess: guess,
    }),
  });

  const result: string[] = await response.json();

  return result

}


export default function Home() {

  let id = 0;

  useEffect(() => {
    async function logKey(e: KeyboardEvent) {
      let log = document.getElementById(id.toString());
      const key = e.key;

      if (key.length == 1 && key.match(/[a-z]/i)) {
        if (id < 5) {
          log.textContent = ` ${key.toUpperCase()}`;
          id += 1;
        }
      }
      if (key == 'Backspace') {
        if (id > 0) {
          id -= 1;
        }
        log = document.getElementById(id.toString());
        log.textContent = '';
      }
      if (key == 'Enter') {
        const word = await submitGuess("CRANE")
        log = document.getElementById("message")
        log.textContent = word.toString()
      }
    };

    document.addEventListener("keydown", logKey);

    return () => {
      document.removeEventListener("keydown", logKey);
    };
  }, []);

  return (
    <main>
      <h1>Games</h1>
      <h2>Wordle</h2>
      <p id="message"></p>
      <div id="grid">
        <div id="row0" className="row">
          <div id="0" className="col"></div>
          <div id="1" className="col"></div>
          <div id="2" className="col"></div>
          <div id="3" className="col"></div>
          <div id="4" className="col"></div>
        </div>
        <div id="row1" className="row">
          <div id="0" className="col"></div>
          <div id="1" className="col"></div>
          <div id="2" className="col"></div>
          <div id="3" className="col"></div>
          <div id="4" className="col"></div>
        </div>
        <div id="row2" className="row">
          <div id="0" className="col"></div>
          <div id="1" className="col"></div>
          <div id="2" className="col"></div>
          <div id="3" className="col"></div>
          <div id="4" className="col"></div>
        </div>
        <div id="row3" className="row">
          <div id="0" className="col"></div>
          <div id="1" className="col"></div>
          <div id="2" className="col"></div>
          <div id="3" className="col"></div>
          <div id="4" className="col"></div>
        </div>
        <div id="row4" className="row">
          <div id="0" className="col"></div>
          <div id="1" className="col"></div>
          <div id="2" className="col"></div>
          <div id="3" className="col"></div>
          <div id="4" className="col"></div>
        </div>
        <div id="row5" className="row">
          <div id="0" className="col"></div>
          <div id="1" className="col"></div>
          <div id="2" className="col"></div>
          <div id="3" className="col"></div>
          <div id="4" className="col"></div>
        </div>
      </div>
    </main>
  );
}
