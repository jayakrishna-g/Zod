module.exports.getPreviousCell = (idx, arr) => {
  if (arr && arr.length >= idx && idx !== 0) {
    return arr[idx - 1];
  }
  return undefined;
};

module.exports.getLastCell = (arr) => this.getPreviousCell(arr.length, arr);
