
var btns=document.querySelectorAll('.button-container button');
var cat=document.getElementsByClassName("cat")[0];
// console.log(btns);
// console.log(cat);
//alert("file included");
for(let i=0;i<btns.length;i++){
    btns[i].addEventListener("click",manageCatClasses);
}
function manageCatClasses(){
    if(this.getAttribute("data-add")){
        cat.classList.add(this.getAttribute("data-add"));
    }
    if(this.getAttribute("data-remove")){
        cat.classList.remove(this.getAttribute("data-remove"))
    }
}