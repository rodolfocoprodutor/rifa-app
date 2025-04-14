const numberGrid = document.getElementById("numberGrid");
const numeroSorteado = document.getElementById("numeroSorteado");
const drawButton = document.getElementById("drawButton");

for (let i = 1; i <= 50; i++) {
  const btn = document.createElement("button");
  btn.textContent = i;
  btn.dataset.number = i;
  numberGrid.appendChild(btn);
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function animarSorteio() {
  const buttons = Array.from(numberGrid.children);
  let lastActive = null;

  for (let i = 0; i < 20; i++) {
    const randomIndex = Math.floor(Math.random() * buttons.length);
    const btn = buttons[randomIndex];

    if (lastActive) lastActive.classList.remove("active");
    btn.classList.add("active");
    lastActive = btn;

    await sleep(100);
  }

  const sorteado = Math.floor(Math.random() * 50) + 1;
  buttons.forEach(btn => {
    btn.classList.remove("active", "sorteado");
    if (parseInt(btn.dataset.number) === sorteado) {
      btn.classList.add("sorteado");
    }
  });

  numeroSorteado.textContent = sorteado;
}

drawButton.addEventListener("click", animarSorteio);
