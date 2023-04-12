// hash 散列本质上是将数据均匀的罗列出来

function HashTable() {
    this.table = new Array(137);

    this.put = function (data) {
      let total = 0;
      for (let i = 0; i < data.length; i++) {
        total += data.charCodeAt(i);
      }
      const pos =  total % this.table.length;
      this.table[pos] = data;
    };

    this.showDistro = function () {
      var n = 0;
      for (var i = 0; i < this.table.length; ++i) {
        if (this.table[i] != undefined) {
          console.log(i + ": " + this.table[i]);
        }
      }
    };
}

const someNames = ["David", "Jennifer", "Donnie", "Raymond","Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];
const hashTable = new HashTable();

someNames.forEach(function(item) {
  hashTable.put(item)
});

hashTable.showDistro();
