function accountsMerge(accounts) {
  const uf = new UnionFind();
  const map = {};

  for (const account of accounts) {
    for (let i = 1; i < account.length; ++i) {
      map[account[i]] = account[0];
      if (i < account.length - 1) {
        uf.union(account[i], account[i + 1]);
      }
    }
  }

  const sets = {}; //key: string; value: string[]
  for (const email in map) {
    const root = uf.find(email);
    if (!sets[root]) {
      sets[root] = [];
    }
    sets[root].push(email);
  }

  const res = [];
  for (const root in sets) {
    sets[root].sort((x, y) => {
      if (x < y) return -1;
      if (x > y) return 1;
      return 0;
    });
    res.push([map[root], ...sets[root]]);
  }
  return res;
}

class UnionFind {
  constructor() {
    this.parent = new Map();
  }

  find(x) {
    while (this.parent.has(x)) {
      x = this.parent.get(x);
    }
    return x;
  }

  union(p, q) {
    const rootP = this.find(p);
    const rootQ = this.find(q);
    if (rootP !== rootQ) {
      this.parent.set(this.find(p), this.find(q));
    }
  }
}

const accounts = [
  ["John", "johnsmith@mail.com", "john_newyork@mail.com"],
  ["John", "johnsmith@mail.com", "john00@mail.com"],
  ["Mary", "mary@mail.com"],
  ["John", "johnnybravo@mail.com"],
];

console.log(accountsMerge(accounts));
