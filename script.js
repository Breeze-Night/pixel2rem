document.addEventListener("DOMContentLoaded", () => {
  const pixel = document.querySelector("#pixel__input");
  const rem = document.querySelector("#rem__input");

  const switchBtn = document.querySelector(".arrow__button");

  pixel.addEventListener("keyup", (e) => convertPixelToRem(e));
  rem.addEventListener("keyup", (e) => convertRemToPixel(e));

  switchBtn.addEventListener("click", switchInput);

  function convertPixelToRem(e) {
    if (inputScreening(e, pixel)) {
      const remValue = Number(pixel.value) / 16;
      rem.value = remValue;
    }
  }

  function convertRemToPixel(e) {
    if (inputScreening(e, rem)) {
      const pixelValue = rem.value * 16;
      pixel.value = pixelValue;
    }
  }

  function inputScreening(e, unit) {
    return (
      (!isNaN(Number(e.key)) && !isNaN(Number(unit.value))) ||
      e.key === "Backspace"
    );
  }

  function switchInput() {
    const tempRemValue = rem.value;

    pixel.value = tempRemValue;
    rem.value = Number(pixel.value) / 16;

    // // Get the parent elements of the input fields
    // const pixelContainer = pixel.parentNode;
    // const remContainer = rem.parentNode;

    // // Swap the positions of the parent elements in the DOM
    // pixelContainer.parentNode.insertBefore(remContainer, pixelContainer);

    // // Swap the input fields in the parent elements
    // remContainer.appendChild(pixel);
    // pixelContainer.appendChild(rem);
  }
});
