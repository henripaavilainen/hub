"use client";

import { useEffect } from "react";
import "./styles.css"
import {getWord} from "@/app/api/wordle"

export default function Home() {

  let id = 0;

  useEffect(() => {
    function logKey(e: KeyboardEvent) {
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
        let word = getWord("lol");
        log = document.getElementById("message")
        word.then((s) => log.textContent = s)
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
