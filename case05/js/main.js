var x=document.querySelectorAll("img");
for(var i=0;i<x.length;i++){
if (x[i].getAttribute('src') ==="") {
    x[i].src = '../img/3.jpg';
 }
 //console.log(x[i].getAttribute('src'));
}
