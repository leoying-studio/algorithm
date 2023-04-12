// hash 散列本质上是将数据均匀的罗列出来


// 但是put的方案中是通过字符的编码(ASCII码值) 累加然后取余数的, 这个情况会出现一个问题就是可能出现 key 值是完全一样的
// 所以就会出现后面覆盖前面的情况,出现了不能全部展示.  这种情况称之为 “碰撞”


//解决碰撞就是通过乘以一个较小的质数来生成key
function HashTable() {
    this.table = new Array(137);
    
    this.put = function (data) {
      // 定义一个较小的质数
      const H = 37;
      let total = 0;
      for (let i = 0; i < data.length; i++) {
        total += H * total + data.charCodeAt(i);
      }
      
      const pos = H * total % this.table.length;
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
