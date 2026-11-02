/// <reference types="vite/client" />

import './style.css';

const greeting = document.querySelector<HTMLParagraphElement>('#greeting');
const codeGreeting = document.querySelector<HTMLElement>('.code-string');
const publicGreeting = import.meta.env.VITE_SAMPLE_GREETING || 'Hello from Vite.';
if (greeting) {
  // VITE_* values are public build-time data. textContent avoids interpreting HTML.
  greeting.textContent = publicGreeting;
}
if (codeGreeting) {
  codeGreeting.textContent = JSON.stringify(publicGreeting);
}
