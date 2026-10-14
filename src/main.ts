// Vite turns this import into a production-safe URL. Keep it as a file so
// even this tiny example demonstrates a separately deployed asset.
// @deno-types="./asset-url.d.ts"
import tileUrl from "./assets/tile.svg?no-inline";
import orange from "./assets/orange.png";

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

//create counter var (our money system)
let counter: number = 0;
let fundraiserprice: number = 10;
let fundraisercounter: number = 0;
//html
document.body.innerHTML = `
  <h1 font-family="Rubik Pixels", style="text-align: center;">PROPAGANDA MACHINE</h1>
  <img style="display: block; margin: 0 auto;" src="${orange}" alt="Orange Man">
  <p style="text-align: center;">propaganda generated: <span id="counter">0</span></p>
  <button style="display: block; margin: 0 auto;" id="increment">generate propaganda!</button>
  <button style="display: block; margin: 0 auto;" id="fundraise">fundraise! (+1 p/s, cost: 10)</button>
  <p>fundraiser generates: $<span id="fundraisercounter">0</span> per second!</p>


`;

//button & updating logic
const button = document.getElementById("increment")!;
const counterelem = document.getElementById("counter")!;
const counterfundraise = document.getElementById("fundraise")!;
const fundraisegenerator = document.getElementById("fundraisercounter")!;

function updateCounter(x: HTMLElement, y: number) {
  x.textContent = y.toString();
}

function changeButtonColorGreen(x: HTMLElement) {
  x.style.color = "green";
}

function changeButtonColorRed(x: HTMLElement) {
  x.style.color = "red";
}

//click handler
button.addEventListener("click", () => {
  counter++;
  updateCounter(counterelem, counter);
});

//Fundraiser Growth

function timedgrowth() {
  const _timegrowing = setInterval(() => {
    counter++;
    updateCounter(counterelem, counter);
  }, 1000);
}

counterfundraise?.addEventListener("click", () => {
  if (counter >= fundraiserprice) {
    timedgrowth();
    counter -= fundraiserprice;
    fundraiserprice += 10;
    fundraisercounter++;
    updateCounter(fundraisegenerator, fundraisercounter);
  }
});

// Checks if a certain function can be bought
function affordable(x: HTMLElement, y: number) {
  if (counter >= y) {
    changeButtonColorGreen(x);
  } else {
    changeButtonColorRed(x);
  }
}

function gameLoop() {
  requestAnimationFrame(gameLoop);
  affordable(counterfundraise, fundraiserprice);
}

requestAnimationFrame(gameLoop);
