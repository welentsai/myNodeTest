
function mysleep(para) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve(para * para)
    }, 1000 * para)
  });
}

/*
  1. await運算子可被用來等待 Promise，只能在 async function內使用
  2. await 表示法會暫停 async 函式執行，等待 Promise 物件的解析，並在 promise 物件的值被 resolve 時回復 async 函式的執行
  3. 如果 Promise 物件被 rejected，則 await 會丟出 rejected 的值。
*/
async function f1() {
  try {
    let x = await mysleep(5);
    console.log("async call with await : " + x); // 4
    for(var i in [1, 2, 3, 4, 5]) {
      let res = await mysleep(i);
      console.log(res);
    }
    let z = await Promise.reject(30); // 若 Promise 被 reject，則丟出 reject 後的異常值
  } catch(e) {
    console.log("Catched Error !! : " + e); // 30
  }
};

console.log(async function () {});

f1();
// mysleep() 會立即被執行, async function 為 non-blocking
mysleep(1)
.then((result) => {
  console.log("Promise Call Return is : " + result);
});

