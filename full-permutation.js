// 数组全排列

/*
 * 采用深度优先遍历加上回溯方法完成
 *  思路分析: 全排列的次数为阶乘, 比如数组长度为 [1,2,3] 则阶乘为  3 * 2 * 1 = 6  
 *  树的节点层级根据数组长度越大,则树节点越深. 
 *  比如数组长度为 [1,2,3] 则有一级叶子树  1          2           3
 *                                  1   2      2   1       3    1
 *                                 1  2  3   2  1   3     3   1  2
 
 *
 * 到达一级节点分支 1 之后, 开始递归子节点, 这个时候递归到2, 则此时有了  [1, 2]
 * 有了 [1,2]之后,开始第三层节点遍历到 [1, 2, 3]
 * 通过pop回退, 回到了最外层的一级节点开始第二个节点为2的分支开始往复
  */
function premutation(arr) {
   const result = [];
  
   function dfs(path) {
     
      if (path.length === arr.length) {
         result.push([...path]);
      }
     
      for (let i = 0; i < arr.length; i++) {
          if (path.includes(arr[i])) {
             continue;
          }
          path.push(arr[i]);
          dfs(path);
          path.pop();
      }
   }
  
   dfs([])
  
  return result;
}

const result = premutation([1,2,3]);  // [ [1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1] ]

