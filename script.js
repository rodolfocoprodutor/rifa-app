const grid = document.getElementById('numberGrid');
const result = document.getElementById('numeroSorteado');
const button = document.getElementById('drawButton');

for (let i = 1; i <= 25; i++) {
  const cell = document.createElement('div');
  cell.textContent = i;
  cell.dataset.num = i;
  grid.appendChild(cell);
}

button.addEventListener('click', () => {
  const cells = Array.from(grid.children);
  let current = 0;
  const total = 20 + Math.floor(Math.random() * 30);
  const interval = setInterval(() => {
    cells.forEach(cell => cell.classList.remove('active'));
    const rand = Math.floor(Math.random() * cells.length);
    cells[rand].classList.add('active');
    current++;
    if (current > total) {
      clearInterval(interval);
      const selected = cells[rand];
      result.textContent = selected.dataset.num;
    }
  }, 100);
});
