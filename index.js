const buttonrandom = document.querySelector(".random");
const textrandom = document.querySelector(".sitation");
const titlerandom = document.querySelector(".title");

buttonrandom.addEventListener("click", async () => {
  const response = await fetch("https://api.adviceslip.com/advice");
  const data = await response.json();
  textrandom.innerHTML = `"${data.slip.advice}"`;
  titlerandom.innerHTML = `Advice #${data.slip.id}`;
  console.log(data);
});
