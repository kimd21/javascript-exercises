const fibonacci = function(idx) {
  if (idx < 0) return 'OOPS';
  if (idx == 0) return 0;
  let n = parseInt(idx);
  let ctr = 1;
  let n1 = 0;
  let n2 = 1;
  while (ctr <= n) {
    tmp = n1 + n2;
    n2 = n1;
    n1 = tmp;
    ctr++;
  }
  return n1;
}

module.exports = fibonacci
