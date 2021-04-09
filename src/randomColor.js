const colors = [
  '#abdee6',
  '#cbaacb',
  '#ffffb5',
  '#ffccb6',
  '#f3b0c3',
  '#c6dbda',
  '#fee1e8',
  '#fed7c3',
  '#f6eac2',
  '#ecd5e3',
  '#ff968a',
  '#ffc5bf',
  '#ffc8a2',
  '#8fcaca',
  '#97c1a9',
  '#eceae4',
  '#a2e1db',
  '#55cbcd'
];

export function randomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}