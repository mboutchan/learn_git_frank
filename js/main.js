let form = document.querySelector("form");
let nom = document.querySelector("input");

form.addEventListener("submit", function(e){
    e.preventDefault();
    if(nom.value.trim().length===0){
        alert('veuillez entrer un nom');
    }else{
        alert(`bonjour ${nom.value.trim()}`);
    }
});
