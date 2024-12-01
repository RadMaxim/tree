import { trie } from "./data.js";
import { autocomplete, drawElems } from "./drawElem.js";
let words = document.getElementById("words")
let timer1 = document.getElementById("timer1")

function drawElem(word) {
  
    let t1 = performance.now()
    let arrr = autocomplete(trie, word);
    words.innerHTML= drawElems(arrr);
    let t2 = performance.now()
    timer1.innerText =`${Math.round(t2-t1)} ms`
    console.log("Tree: "+(t2-t1));
}
export {drawElem}