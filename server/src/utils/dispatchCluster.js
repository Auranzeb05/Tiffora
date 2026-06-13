function clusterAddressesByPincodeAndSector(addresses = []) {
  const buckets = new Map();

  for (const address of addresses) {
    const pincode = String(address?.pincode || '').trim();
    const sector = String(address?.sector || '').trim();

    if (!pincode || !sector) {
      continue;
    }

    const key = `${pincode}::${sector}`;

    if (!buckets.has(key)) {
      buckets.set(key, {
        pincode,
        sector,
        addresses: []
      });
    }

    buckets.get(key).addresses.push(address);
  }

  return [...buckets.values()].sort((a, b) => {
    if (a.pincode === b.pincode) {
      return a.sector.localeCompare(b.sector, undefined, { sensitivity: 'base' });
    }

    return a.pincode.localeCompare(b.pincode, undefined, { numeric: true, sensitivity: 'base' });
  });
}

module.exports = { clusterAddressesByPincodeAndSector };
