const DEFAULT_SELECTOR = "[data-jumpy-animation]";
const WRAPPER_SELECTOR = "[data-jumpy-animation-wrapper]";

const buildStyle = (selector, duration) => {
  return `
    ${selector} {
        display: inline-flex;
        overflow: hidden;
        position: relative;
    }

    :where(${selector}, ${WRAPPER_SELECTOR}) > span {
        transform: translateY(0);
        transition: transform ${duration};
        transition-delay: calc(0.1s * var(--delay));
    }
    
    ${selector}:where(:hover, :focus) :is(span, ${WRAPPER_SELECTOR} span) {
        transform: translateY(-100%);
    }
    
    ${WRAPPER_SELECTOR} {
        position: absolute;
        inset: 0;
        transform: translateY(100%);
        display: inline-flex;
    }
`;
};

export function initFlyingAnimation({
  selector = DEFAULT_SELECTOR,
  duration = "1s",
} = {}) {
  if (!selector) {
    console.warn(
      "A valid selector needs to be provided to flying animation initializer."
    );
    return;
  }

  const elementsToAnimate = document.querySelectorAll(selector);

  if (elementsToAnimate.length > 0) {
    document.head.insertAdjacentHTML(
      "beforeend",
      `<style data-id="jumpy-animation-styles">${buildStyle(
        selector,
        duration
      )}</style>`
    );
  }

  for (const element of elementsToAnimate) {
    if (element.dataset.jumpyAnimationReady) {
      return;
    }

    const content = element.innerText.trim();
    const chunks = content.split("");
    const brokenContent = chunks
      .map((chunk, index) => `<span style="--delay: ${index}">${chunk}</span>`)
      .join("");
    const duplicateContent = `<div ${WRAPPER_SELECTOR.slice(
      1,
      -1
    )}>${brokenContent}</div>`;

    element.setAttribute("data-jumpy-animation-ready", true);
    element.innerHTML = `${brokenContent}${duplicateContent}`;
  }
}
