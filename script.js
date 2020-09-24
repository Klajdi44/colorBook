'use strict';
document.addEventListener('DOMContentLoaded', start);

function start() {
  console.log('ready');
  fetchDuck();
}

async function fetchDuck() {
  const response = await fetch('./duck.svg');
  const data = await response.text();
  document.querySelector('#main').innerHTML = data;
  manipulateSVG();
}

function manipulateSVG() {
  document.querySelector('#colors').childNodes.forEach(color => color.addEventListener('click', clickColor));
  document.querySelector('#duck').childNodes.forEach(element => element.addEventListener('click', clickBox));
  document.querySelector('#duck').childNodes.forEach(element => element.addEventListener('mouseenter', visualFeedback));
  document.querySelector('.input').addEventListener('input', changeDuck);
}

function visualFeedback() {
  if (this) {
    this.style.cursor = 'copy';
  }
}

let selectedColor = '#bada55';

function clickColor() {
  selectedColor = this.getAttribute('fill');
  document.querySelector('.current').textContent = `Current  color ${selectedColor}`;
  localStorage.setItem('color', selectedColor);
}

function clickBox() {
  this.setAttribute('fill', selectedColor);
}

function changeDuck() {
  selectedColor = document.querySelector('.input').value;
  document.querySelector('.current').textContent = `Current color ${document.querySelector('.input').value}`
}

