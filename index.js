const elementsToAnimate = document.querySelectorAll("[data-jumpy-animation]");

for (const element of elementsToAnimate) {
  const text = element.innerText.trim();
  const chunks = text.split("");
  const updatedElementContext = chunks
    .map((chunk, index) => `<span style="--delay: ${index}">${chunk}</span>`)
    .join("");
  const hiddenText = `<div data-jumpy-animation-wrapper>${updatedElementContext}</div>`;

  element.innerHTML = `${updatedElementContext}${hiddenText}`;
}
