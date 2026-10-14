// Vite turns this import into a production-safe URL. Keep it as a file so
// even this tiny example demonstrates a separately deployed asset.
// @deno-types="./asset-url.d.ts"
import tileUrl from "./assets/tile.svg?no-inline";

const app = document.querySelector<HTMLElement>("#app")!;

const heading = document.createElement("h1");
heading.textContent = "D1 project";

const image = document.createElement("img");
image.src = tileUrl;
image.alt = "A teal tile with a cream circle";
image.width = 96;
image.height = 96;

const message = document.createElement("p");
message.textContent = "Your project starts here.";

app.append(heading, image, message);

//create counter var
let counter: number = 0;

//html
document.body.innerHTML = `
  <h1>PROPAGANDA MACHINE</h1>
  <p>propaganda generated: <span id="counter">0</span></p>
  <button id="increment">generate propaganda (speech)!</button>
  <button id="fundraise">fundraise!</button>

`;

//button & updating logic
const button = document.getElementById("increment")!;
const counterelem = document.getElementById("counter")!;
const counterfundraise = document.getElementById("fundraise");

function updateCounter() {
  counterelem.textContent = counter.toString();
}

//click handler
button.addEventListener("click", () => {
  counter++;
  updateCounter();
});

//Fundraiser Growth
function timedgrowth() {
  const _timegrowing = setInterval(() => {
    counter++;
    updateCounter();
  }, 1000);
}
counterfundraise?.addEventListener("click", () => {
  if (counter >= 10) {
    timedgrowth();
    counter -= 10;
  }
});
