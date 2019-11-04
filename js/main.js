const dateNow = new Date();
const elem = document.getElementById('date-show');
const months = [
  '',
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro'
];

elem.innerHTML =
  dateNow.getDate() +
  ' de ' +
  months[dateNow.getMonth()] +
  ' de ' +
  dateNow.getFullYear();
