export const roasts = [
  "If you were any smarter, you'd need a second brain just to tie your shoes.",
  "I'd agree with you, but then we'd both be wrong.",
  "I'm not saying you're stupid; you just have bad luck thinking.",
  "I'm not a doctor, but I'm pretty sure you're suffering from a severe lack of common sense.",
  "Are you a Wi-Fi signal? Because I'm not feeling a connection.",
  "I'd call you a tool, but even they serve a purpose.",
  "If laughter is the best medicine, your face must be curing the world.",
  "You're not stupid; you just have bad luck thinking.",
  "I'd say you're a sight for sore eyes, but even my sore eyes deserve better.",
  "Is your name Waldo? Because someone like you is hard to find, and honestly, I'm not looking.",
  "When I look at you, I wish I could meet you again for the first time… and walk past.",
];

export default function randomRoast() {
  const randomIndex = Math.floor(Math.random() * (roasts.length + 0.999));
  const theRoast = roasts[randomIndex] || "You're a disappointment.";
  return theRoast;
}
