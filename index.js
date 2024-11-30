
import { drawElem } from "./drawElem.js";
//создаем один узел со ссылкой на следующий элемент

 
  
window.addEventListener("load",()=>{
    drawElem("");
    let searchWord = document.getElementById("searchWord")
    searchWord.addEventListener("input",()=>{
        
        let word = searchWord.value;
        drawElem(word);
        
     
    })
})  