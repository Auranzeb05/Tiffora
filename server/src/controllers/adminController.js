const { clusterAddressesByPincodeAndSector } = require('../utils/dispatchCluster');

function generateDispatchManifest(req, res) {
  const { addresses = [] } = req.body || {};

  if (!Array.isArray(addresses)) {
    return res.status(400).json({ message: 'addresses must be an array' });
  }

  const clusters = clusterAddressesByPincodeAndSector(addresses);
  return res.status(200).json({ clusters, clusterCount: clusters.length });
}

module.exports = { generateDispatchManifest };
