import { arr } from "./data.js";
class TrieNode {
    constructor() {
      this.children = {};
      this.isWord = false;
    }
  }
  
  class Trie {
    constructor() {
      this.root = new TrieNode();
    }
  
    insert(word) {
      let node = this.root;
      for (const char of word) {
        if (!node.children[char]) {
          node.children[char] = new TrieNode();
        }
        node = node.children[char];
      }
      node.isWord = true;
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
  for (let index = 0; index < arr.length; index++) {
    trie.insert(arr[index]);
    
  }
  
 
  
window.addEventListener("load",()=>{
    let words = document.getElementById("words")
    let words1 = document.getElementById("words1")
let timer2 = document.getElementById("timer2")
let timer1 = document.getElementById("timer1")
    let searchWord = document.getElementById("searchWord")
    let searchWord1 = document.getElementById("searchWord1")
    searchWord.addEventListener("input",()=>{
        words.innerText = ""
        let word = searchWord.value;
        let t1 = performance.now()
        let arr = autocomplete(trie, word);
        console.log(arr.length);
        
        let li = ``
        for (let index = 0; index < arr.length; index++) {
           li+=`<li>${arr[index]}</li>`
             
        }
        let t2 = performance.now()
        timer1.innerText = (t2-t1)
        words.innerHTML= li
     
    })
    searchWord1.addEventListener("input",()=>{
        words.innerText = ""
        let word = searchWord1.value;
        let t1 = performance.now()
        let emptyArr = []
        for (let index = 0; index < arr.length; index++) {
            if (arr[index].startsWith(word)) {
                emptyArr.push(arr[index])
            }
            
        }
        let li = ``
        for (let index = 0; index < emptyArr.length; index++) {
           li+=`<li>${emptyArr[index]}</li>`
             
        }
        console.log(emptyArr.length);
        
        let t2 = performance.now()
        timer2.innerText = (t2-t1)
        words1.innerHTML= li
     
    })
})  