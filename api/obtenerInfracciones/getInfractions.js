function hasInfractions(userDNI) {
  /**
   * Función de ejemplo donde se obtendría
   * la info de la infracción y se realizaría la
   * validación si tiene o no infracciones.
   */
  return Boolean(userDNI % 2);
}

function getInfractions(req, res) {
  const { userDNI } = req.params;

  const userHasInfractions = hasInfractions(userDNI);

  res.json({
    hasInfractions: userHasInfractions,
    message: `El usuario ${userHasInfractions ? '' : 'no '}tiene infracciones`,
  });
}

module.exports = getInfractions;
