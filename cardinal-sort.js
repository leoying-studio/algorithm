/**
*
*  基数排序
*
*/

function Queue() {
   this.dataStore = [];
}

Queue.prototype = {
  construcror: Queue,
  enqueue: function (element) {
    this.dataStore.push(element);
  },
  dequeue: function () {
    return this.dataStore.shift();
  },
  empty: function () {
    return this.dataStore.length === 0;
  },
};

function distribute(nums, queues, n, digit) {
  for (var i = 0; i < n; ++i) {
    if (digit == 1) {
      queues[nums[i] % 10].enqueue(nums[i]);
    } else {
      queues[Math.floor(nums[i] / 10)].enqueue(nums[i]);
    }
  }
}

function collect(queues, nums) {
  var i = 0;
  for (var digit = 0; digit < 10; ++digit) {
    while (!queues[digit].empty()) {
      nums[i++] = queues[digit].dequeue();
    }
  }
}
function dispArray(arr) {
  console.log(arr);
}
//主程序
var queues = [];
for (var i = 0; i < 10; ++i) {
  queues[i] = new Queue();
}
var nums = [];

for (var i = 0; i < 10; ++i) {
  nums[i] = Math.floor(Math.floor(Math.random() * 101));
}

// 第一次是个位
distribute(nums, queues, 10, 1);
collect(queues, nums);
dispArray(nums);
// 第二次是十位数
distribute(nums, queues, 10, 10);
collect(queues, nums);
// print("\n\nAfter radix sort: ");
dispArray(nums);
