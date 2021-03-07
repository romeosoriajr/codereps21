function MyHashMap () {

  const map = Object.create(MyHashMap.prototype);
  map.data = {};

  return map;
}

MyHashMap.prototype.put = function (key, value) {
  this.data[key] = value;

};

MyHashMap.prototype.get = function (key) {

  return this.data[key] !== undefined ? this.data[key] : -1;
  
}

MyHashMap.prototype.remove = function (key) {
  delete this.data[key]

}

const map = new MyHashMap();

map.put('blah', 'stuff');
map.put('blah12', 'stuff');
