
// [+-]? optional sign
// (\d+\.\d*) at least one number, decimal, one number zero or less
// (\.\d+) decimal, at least one number
// ([eE][+-]?\d+) has E, optionalsign, followed by at least one number
function isNumber(s) {
  const regex = /^([+-]?(((\d+\.\d*)|(\.\d+))|(\d+))([eE][+-]?\d+)?)$/

  return regex.test(s);

}
