import { arr, trie } from "./data.js";
const results = [];

const byteData = (data)=>{
  const memory = JSON.stringify(data).length
  return memory*2
}
  function autocomplete(trie, prefix) {
    let node = trie.root;
    for (const char of prefix) {
      if (!node.children[char]) return results;
      node = node.children[char];
    }
    collectWords(node, prefix);
    return results;
  }
  function collectWords(node, currentWord) {
    if (node.isWord) results.push(node.info);
    for (const char in node.children) {
      collectWords(node.children[char], currentWord + char);
    }
  }

console.log("array:"+byteData(arr));
console.log("tree:"+byteData(trie));

function drawElems(arrElems) {
  return arrElems.reduce((buf, currentVal, i)=>buf+=`<li>
  <div><p>${i+1}</p></div>
   <div><p>${currentVal.value}</p></div>
   <div><p>${currentVal.data}</p></div>
   </li>`,"")
}

export {autocomplete,drawElems};
