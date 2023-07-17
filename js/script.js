let modal = document.getElementById("modalZoom");

//let img = document.getElementById('modalImg');
let img = document.querySelector(".img-produto").firstChild.nextSibling;

let modalImg = document.getElementById("imgZoom");
img.onclick = function(){
    let val = img.clientHeight / 2;
    let s = "calc(47vh - " + val + "px)";
    modal.style.setProperty("padding-top", s);
    modal.style.display = "block";
    modalImg.src = this.src;
}

modal.onclick = function() {
    modalImg.className += " out";
    setTimeout(function() {
        modal.style = "";
        modal.style.display = "none";
        modalImg.className = "modal-content";
    }, 400);
    
}    