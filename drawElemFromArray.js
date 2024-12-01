import { arr } from "./data.js";
import { drawElems } from "./drawElem.js";
let timer2 = document.getElementById("timer2")
let words1 = document.getElementById("words1")

function drawElemArray(word) {
    let t3 = performance.now()
    let arrResult  = []
      for (let index = 0; index < arr.length; index++) {
          if (arr[index].value.startsWith(word)) {
            arrResult.push(arr[index])
          }
      }
      words1.innerHTML = drawElems(arrResult);
      let t1 = performance.now()
      timer2.innerText =`${Math.round(t1-t3)} ms Array`
      console.log("Array: "+(t1-t3));
  }
  export {drawElemArray}