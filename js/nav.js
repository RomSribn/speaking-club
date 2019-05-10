const navs = document.querySelector("nav[role=header-nav]");
const btn = navs.querySelector("#menu-button");
const hidMenu = navs.querySelector("ul");

console.log(hidMenu);
console.log(btn);
btn.addEventListener("click", handleClick);


function handleClick(evt) {
console.log(evt);
    if(!this.classList.contains("open")){
        this.classList.add("open");
        hidMenu.classList.add("open");
        hidMenu.classList.remove("hidden-castom");
        // hidMenu.style.display = "block";

    }else{
        this.classList.remove("open");
        hidMenu.classList.remove("open");
        hidMenu.classList.add("hidden-castom");
        // hidMenu.style.display = "";
    }


}