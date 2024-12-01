
import { drawElem, drawElemArray } from "./drawElem.js";
//создаем один узел со ссылкой на следующий элемент

 
  
window.addEventListener("load",()=>{
    drawElem("");
    drawElemArray("");
    let searchWord = document.getElementById("searchWord")
    let searchWord1 = document.getElementById("searchWord1")

    searchWord.addEventListener("input",()=>{
        
        let word = searchWord.value;
        drawElem(word);
        
     
    })
    searchWord1.addEventListener("input",()=>{
        let word = searchWord1.value;
        drawElemArray(word)
    })
})  