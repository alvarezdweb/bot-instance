/**
 * Se podría obtener esta info de variable de entorno
 * o configuración del servidor.
 */
const BOT_INFO = {
  name: 'BeBot',
  id: '0ed23921-504a-4b00-a791-bbc1a5e8521c',
  owner: 'Matias Alvarez',
};

function botInfo(req, res) {
  res.json(BOT_INFO);
}

module.exports = botInfo;
