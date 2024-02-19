export function calculateResistance(band1, band2, multiplier, tolerance) {
  const resistance = (parseInt(band1 + band2) * parseInt(multiplier)).toString();
  return resistance + ' ' + tolerance;
}