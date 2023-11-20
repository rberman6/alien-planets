import { alienPlanets } from "./alienPlanets.js";

for (let planet of alienPlanets) {
  const planetContainer = document.querySelector(".planet");

  const planetDiv = document.createElement("div");
  planetDiv.id = "planetDiv";
  const planetName = document.createElement("h4");
  const emoji = document.createElement("p");
  emoji.id = "emoji";

  planetName.textContent = `${planet.name}`;
  emoji.textContent = `${planet.emoji}`;

  planetContainer.appendChild(planetDiv);
  planetDiv.appendChild(planetName);
  planetDiv.appendChild(emoji);
}
