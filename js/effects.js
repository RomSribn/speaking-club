const header = document.querySelector("header[role=header]");
let arr = [];

document.addEventListener("scroll", handleScroll);
//hidden header ----> top: -80px;

function handleScroll(evt){
    arr.push(window.pageYOffset);
    if(!arr.length) return;
    if(arr[arr.length - 1] > arr[arr.length - 2]){
        header.style.top = "-80px";
        return;
    }
    header.style.top = "0";
}