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
    let searchWord = document.getElementById("searchWord")
    searchWord.addEventListener("input",()=>{
        words.innerText = ""
        let word = searchWord.value;
        let arr = autocomplete(trie, word);
        let li = ``
        for (let index = 0; index < arr.length; index++) {
           li+=`<li>${arr[index]}</li>`
           
           
            
        }
        words.innerHTML= li
     
    })
})  