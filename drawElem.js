import { arr } from "./data.js";
let searchWord = document.getElementById("searchWord")

let words = document.getElementById("words")
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
  }
  
  function autocomplete(trie, prefix) {
    const results = [];
    let node = trie.root;
  
    for (const char of prefix) {
      if (!node.children[char]) return results;
      node = node.children[char];
    }
  
    function collectWords(node, currentWord) {
      if (node.isWord) results.push(currentWord);
      for (const char in node.children) {
        collectWords(node.children[char], currentWord + char);
      }
    }
  
    collectWords(node, prefix);
    return results;
  }
  
  
const trie = new Trie();
arr.forEach((elem)=>trie.insert(elem.value,elem))
console.log(trie);

function drawElem(word) {
    
    words.innerHTML = ""
    let arr = autocomplete(trie, word);
  
    
    let all_li = arr.reduce((buf, currentVal)=>buf+=`<li>
    <p>${currentVal}</p>
    <p></p>
    </li>`,"")
   
    // searchWord.value = arr[0]
    words.innerHTML= all_li;
}
export {drawElem};