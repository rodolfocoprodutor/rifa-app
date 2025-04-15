const nomesPorNumero = {1: 'Mohamed', 2: 'Mohamed', 3: 'Mohamed', 4: 'Aline enf. Nova', 5: 'José Daher', 6: 'José Daher', 7: 'Aline enf. (PSI)', 8: 'Drº Antônio Isidoro Ortop.', 9: 'Luiz PTA', 10: 'Luciana Tec. enf.', 11: 'Mônica EDA', 12: 'Priscila PTA', 13: 'Lilian Serv. Social', 14: 'Darli Gesso', 15: 'Lilian Serv. Social', 16: 'Heitor Cir. Geral', 17: 'Kamila REC.', 18: 'Heitor Cir. Geral', 19: 'Heitor Cir. Geral', 20: 'Drª Celina', 21: 'Luiz PTA', 22: 'Kennedy', 23: 'Raiza enf.', 24: 'Drº Antônio Isidoro Ortop.', 25: 'Maria Gesso', 26: 'Gabi enf Nova', 27: 'Drª Silva', 28: 'Israel Tec. Pref.', 29: 'Wesley Tec.', 30: 'Vera Max', 31: 'Meire enf.', 32: 'Drª Silva', 33: 'Kenned', 34: 'Lutecio Tec.', 35: 'Lilian Serv. Social', 36: 'Helen enf.', 37: 'Willian Segurança', 38: 'Ingrid enf.', 39: 'Gama enf.', 40: 'Francieli enf. Nova', 41: 'Drº Vinicius', 42: 'Drª Celina', 43: 'Wellington Segurança', 44: 'Drª Adriana', 45: 'Sônia Gesso', 46: 'Kenndy', 47: 'Aline enf.(PSI)', 48: 'Drº João Roberto', 49: 'Aline enf. nova', 50: 'Drº Marco Antônio'};

const grid = document.getElementById('numberGrid');
const result = document.getElementById('numeroSorteado');
const nomeVencedor = document.getElementById('nomeVencedor');
const button = document.getElementById('drawButton');

for (let i = 1; i <= 50; i++) {
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
      const numero = parseInt(selected.dataset.num);
      result.textContent = numero;
      nomeVencedor.textContent = nomesPorNumero[numero] || 'Nome não encontrado';
    }
  }, 100);
});
