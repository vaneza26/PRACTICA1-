/*
NOTA: AL FINAL DE CADA NIVEL, INICIA EL SIGUIENTE 
*/

const emojis = {
  '-': ' ',
  'O': '🏚️',
  'X': '🍎',
  'I': '🌾',
  'PLAYER': '⛄',
  'BOMB_COLLISION': '🥶',
  'GAME_OVER': '😭',
  'WIN': '🥇',
  'HEART':'❤️', //VIDAS
};

const maps = [];
maps.push(`
  XXXXXXXXXX
  XXXXXXXXXX
  XXXXXXXXXX
  XXXXXXXXXX
  XXXXXXXXXX
  XXXXXXXXXX
  X---IXXXXX
  XXX--XXXXX
  XXX---XXXX
  O---XXXXXX
`);
maps.push(`
  O-----XXXX
  XXXX--XXXX
  XX----XXXX
  X--XXXXXXX
  X--XX--XXX
  X--XXX-XXX
  XX--XX--XX
  XXX--XX-XX
  XXXX----IX
  XXXXXXXXXX
  `);
maps.push(`
  XXXI--XXXX
  XXXXX-XXXX
  XX----XXXX
  XX-XXXXXXX
  XX-----XXX
  XXXXXX-XXX
  XX-----XXX
  XX-XXXXXXX
  XX-----XXX
  XXX--OXXXX
`);
