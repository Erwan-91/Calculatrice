// Déclaration des variables
let affiche = document.getElementById("afficheur")

let lstButtons =  document.querySelectorAll ("button");
for (let element of lstButtons){
    element.addEventListener("click", function(){manageClic(this)});
}

function manageClic(el){
    switch(el.innerText){
        case "C":
            affiche.innerText = ("");
            break;
            
            
        case "<-":
            affiche.innerText = affiche.innerText.slice(0,-1);
            break;
                
                
        case "=":
            result=eval(affiche.innerText)
            affiche.innerHTML += "<br>=" + result;
                    
            break;
                    
        
                        
        
           
                        
         default:
             affiche.innerHTML += el.innerText;
                            
                break;
    }

}


