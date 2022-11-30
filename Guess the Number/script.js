'use strict';

let rand = Math.floor(Math.random() * 19 + 1);
let score = Number(document.querySelector('.scr').textContent);
let notGuessed = true;

const setText = (text) => document.querySelector('.text').textContent = text;
const setScr = (text) => document.querySelector('.scr').textContent = text;
const setHS = (text) => document.querySelector('.hscr').textContent = text;

document.querySelector('.check').addEventListener('click', () => {

  let inp = Number(document.querySelector('.inp_number').value);

  console.log(inp);

  if (!inp) setText('ENTER!');

  if(inp === rand) {
    setText(rand);

    if(notGuessed) score += 5;

    notGuessed = false;
  }

  if (score > 0) {
    if(inp !== rand) {
      setText(inp < rand ? 'bigger' : 'less');
      score--
    }
  }

  setScr(score);
});
