import { arr } from "./data.js";

let words = document.getElementById("words")
let words1 = document.getElementById("words1")
let timer2 = document.getElementById("timer2")
let timer1 = document.getElementById("timer1")
const byteData = (data)=>{
  const memory = JSON.stringify(data).length
  return memory*2
}


// Создаем одно звено
class TrieNode {
    constructor() {
      this.children = {};
      this.isWord = false;
      this.info = null
    }
  }
//создаем полиморфное дерево
  class Trie {
    constructor() {// создаем пустой узел
      this.root = new TrieNode();
    }
    insert(word, data) {// метод принимает слово
      let node = this.root;
      for (const char of word) { // перебираем каждую букву
        if (!node.children[char]) { // если буквы нет в объекте
          node.children[char] = new TrieNode(); // тогда присваеваем букву 
          //в объект и добавляем ссылку
        }
        node = node.children[char];
      }
      node.info = data
      node.isWord = true;// если слова закончилось тогда присваеваем флаг true
    }
    serialize(node = this.root, prefix = "") {
      let result = [];
      if (node.isWord) result.push(prefix);
      for (const char in node.children) {
        result = result.concat(this.serialize(node.children[char], prefix + char));
      }
      return result;
    }
  }
  
  
  function autocomplete(trie, prefix) {
  
    const results = [];
    let node = trie.root;
  
    for (const char of prefix) {
      if (!node.children[char]) return results;
      node = node.children[char];
    }
  
    function collectWords(node, currentWord) {
      if (node.isWord) results.push(node.info);
      for (const char in node.children) {
        collectWords(node.children[char], currentWord + char);
      }
    }
  
    collectWords(node, prefix);
    return results;
  }
  
  
function drawElemArray(word) {
  let t3 = performance.now()
  let arrResult  = []
    for (let index = 0; index < arr.length; index++) {
        if (arr[index].value.startsWith(word)) {
          arrResult.push(arr[index])
        }
    }
    let all_li1 = arrResult.reduce((buf, currentVal,i)=>buf+=`<li>
     <div><p>${i+1}</p></div>
    <div> <p>${currentVal.value}</p> </div>
     <div><p>${currentVal.data}</p> </div>
    </li>`,"")
   
    
    words1.innerHTML =all_li1;
    let t1 = performance.now()
    timer2.innerText =`${Math.round(t1-t3)} ms`
    console.log("Array: "+(t1-t3));
}
const trie = new Trie();
function drawElem(word) {
  
   
  
    arr.forEach((elem)=>trie.insert(elem.value,elem))
    console.log(trie.serialize());
    let t1 = performance.now()
    let arrr = autocomplete(trie, word);
    
    
    
    let all_li = arrr.reduce((buf, currentVal, i)=>buf+=`<li>
   <div><p>${i+1}</p></div>
    <div><p>${currentVal.value}</p></div>
    <div><p>${currentVal.data}</p></div>
    </li>`,"")
    
 
    words.innerHTML= all_li;
    

    let t2 = performance.now()
    timer1.innerText =`${Math.round(t2-t1)} ms`
    console.log("Tree: "+(t2-t1));
    
    
    
}
console.log("array:"+byteData(arr));
console.log("tree:"+byteData(trie));


export {drawElem,drawElemArray};