import "./styles/reset.css";
import "./styles/variables.css";
import "./styles/global.css";
import "./styles/utility.css";

const loadIconSprite = async () => {
  const response = await fetch("assets/icons.svg");

  if (!response.ok) {
    throw new Error(`Não foi possível carregar o sprite de ícones: ${response.status}`);
  }

  const spriteMarkup = await response.text();
  const spriteDocument = new DOMParser().parseFromString(spriteMarkup, "image/svg+xml");
  const sprite = spriteDocument.documentElement;

  sprite.removeAttribute("style");
  sprite.classList.add("icon-sprite");
  sprite.setAttribute("aria-hidden", "true");
  document.body.prepend(sprite);
};

loadIconSprite()
  .catch((error) => console.error(error))
  .finally(() => document.documentElement.classList.add("ready"));
