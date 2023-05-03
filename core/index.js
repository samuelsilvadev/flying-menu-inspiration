const DEFAULT_SELECTOR = "data-jumpy-animation";
const WRAPPER_SELECTOR = DEFAULT_SELECTOR + "-wrapper";

const STYLE = `
    [${DEFAULT_SELECTOR}] {
        display: inline-flex;
        overflow: hidden;
        position: relative;
    }

    :where([${DEFAULT_SELECTOR}], [${WRAPPER_SELECTOR}]) > span {
        transform: translateY(0);
        transition: transform 1s, color 200ms;
        transition-delay: calc(0.1s * var(--delay));
    }
    
    [${DEFAULT_SELECTOR}]:where(:hover, :focus) :is(span, [${WRAPPER_SELECTOR}] span) {
        transform: translateY(-100%);
    }
    
    [${WRAPPER_SELECTOR}] {
        position: absolute;
        top: 0;
        left: 0;
        transform: translateY(100%);
        display: inline-flex;
    }
`;

export function initFlyingAnimation({
  selector = `[${DEFAULT_SELECTOR}]`,
} = {}) {
  const elementsToAnimate = document.querySelectorAll(selector);

  if (elementsToAnimate.length > 0) {
    document.head.insertAdjacentHTML(
      "beforeend",
      `<style data-id="jumpy-animation-styles">${STYLE}</style>`
    );
  }

  for (const element of elementsToAnimate) {
    const content = element.innerText.trim();
    const chunks = content.split("");
    const brokenContent = chunks
      .map((chunk, index) => `<span style="--delay: ${index}">${chunk}</span>`)
      .join("");
    const duplicateContent = `<div ${WRAPPER_SELECTOR}>${brokenContent}</div>`;

    element.innerHTML = `${brokenContent}${duplicateContent}`;
  }
}
