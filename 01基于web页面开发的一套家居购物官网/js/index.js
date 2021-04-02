var a = document.querySelectorAll(".cl-l-zd a");
//console.log(a);
a[0].onmouseover = function () {
    this.innerHTML = "Lighting - 12products";
    this.style.color = "grey";
}
a[0].onmouseout = function () {
    this.innerHTML = "吊灯";
    this.style.color = "black";
}
a[1].onmouseover = function () {
    this.innerHTML = "Furniture - 15products";
    this.style.color = "grey";

}
a[1].onmouseout = function () {
    this.innerHTML = "装饰品";
    this.style.color = "black";
}
a[2].onmouseover = function () {
    this.innerHTML = "Decoration - 20products";
    this.style.color = "grey";
}
a[2].onmouseout = function () {
    this.innerHTML = "橱柜";
    this.style.color = "black";
} 
var indexZhe = document.getElementsByClassName("index-zhe");
console.log(indexZhe);
for(var i=0;i<indexZhe.length;i++){
  indexZhe[i].onmouseover = function(){
   this.style.opacity = "0.2";
   this.style.backgroundColor="black";
   this.style. transition = " all .2s linear .2s";

   }
   indexZhe[i].onmouseout = function(){
    this.style.opacity = "1";
    this.style.backgroundColor="";
    this.style. transition = " all .2s linear ";
   }

}
