function kWeakestRows (mat, k) {


  const soldiers = mat.reduce((obj, row, index) => {
    obj[index] = row.reduce((sum, soldier) => sum += soldier);
    return obj;
  }, {})

  const soldierKeys = Object.keys(soldiers);

  soldierKeys.sort((a, b) => soldiers[a] - soldiers[b])

  return soldiers.slice(0, k);
}
