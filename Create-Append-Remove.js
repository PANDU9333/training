let aish=document.createElement("p");
aish.textContent="I'm Chitti";
aish.innerHTML="Memory 1 tera Byte";
aish.style.color="blue";
aish.style.fontSize="20px";
document.getElementById("vasi").appendChild(aish);
let sana = document.getElementsByClassName("list")[0];
    if (sana) {
        sana.remove();
    }
setTimeout(() => {
    let praja = document.getElementsByClassName("list")[2];
    if (praja) {
        praja.remove();
    }
}, 2000);

let newHeading = document.createElement("h2");
newHeading.innerHTML = "Monkey D Luffy";
newHeading.style.backgroundColor = "yellow";
newHeading.style.color = "red";
newHeading.style.fontSize = "30px";
document.body.appendChild(newHeading);

setTimeout(() => {
    let newText = document.createElement("p");
    newText.textContent =  "King Of The Pirates";
    newText.style.color = "green";
    newText.style.fontSize = "25px";
    newText.style.backgroundColor="lightblue";
    document.body.appendChild(newText);
},3000);

let tagText = document.createElement("p");
tagText.textContent ="One Piece";
tagText.style.color = "orange";
document.getElementById("vasi").appendChild(tagText);


let mylist = document.createElement("ul");
for(let i = 1; i<= 3; i++) {
    let listitems = document.createElement("li");
    listitems.textcontent = "Item" + i;
    listitems.style.color = "blue";
    listitems.style.fontsize = "18px";

    mylist.appendChild(li);
    document.body.appendChild(mylist);
    
}

