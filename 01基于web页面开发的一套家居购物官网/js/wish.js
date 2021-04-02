var fuhao = document.getElementsByClassName("fuhao"); 

for(var i=0;i<fuhao.length;i++){
    fuhao[i].onclick = function(){
        var wishlist = this.parentNode.parentNode.parentNode;
        console.log(wishlist);
        var ordercart=this.parentNode.parentNode;
        console.log(ordercart);
         var name =this.parentNode.nextElementSibling;
         console.log(name);  
       
         if(confirm("真的要删除吗:"+  name.innerText  + "？")){
                 wishlist.removeChild(ordercart);
             
             }
   }
 
}
