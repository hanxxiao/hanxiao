function calc1(btn) {
 if(btn.innerHTML == "+"){
      btn.previousElementSibling.value = ++btn.previousElementSibling.value ;
      console.log(btn.previousElementSibling.value);
  }else if(btn.innerHTML == "-"){
      var first = btn.parentNode;
      var child = first.firstElementChild;
    //   console.log(first.nodeType);
    //  console.log(child.nodeType);
    //  console.log(child)
    if(child.value <= 0 ){
        child.value = 1;
    }   
  child.value = --child.value;
  }
    
}


// 在全局和所有元素的父类型中，封装$方法。用于在各种情况下选择元素，接收字符串，返回找到的一个元素对象或多个元素对象的数组
window.$ = HTMLElement.prototype.$ = function(selector){
    // 如果在全局直接调用$，就在document范围内查询
    // 否则就在当前元素范围内查询
    var elems = (this==window?document:this).querySelectorAll(selector);
    // 如果没找到
    if(!elems){       
      // 返回空
      return null;
    }// 如果只找到一个结果
    else if(elems.length==1){
      // 返回当前dom元素
      return elems[0];
    }// 否则
    else{
      // 返回元素对象
      return elems;
    }
  }
  
function show1(btn){
    if(btn.className ="active"){
        console.log(btn.parentNode.previousElementSibling.firstElementChild)
       // var img= btn.parentNode.previousElementSibling.firstElementChild;
        var e = window.event || arguments[0];
        // 获得当前目标
        var target = e.srcElement || e.target;
        // 如果目标是img
        if(target.nodeName == "IMG"){
          // 获得target的src，保存在src中
          var src = target.src;
          // 在src中找最后一个.的位置保存在变量i中
          var i = src.lastIndexOf(".");
          // 拼接src开始位置~i之前的子字符串+-m+i~结尾的子字符串，将结果的字符串设置到id为mImg的元素的src属性中
          $("#mImg").src = src.slice(0,i)  + src.slice(i);
        }
    }
}

  // 商品详情中的标签页
  // 找到id为product_detail下的class为main_tabs的ul
  var ul = $("#product_detail>.main_tabs");
  // 为ul绑定单击事件
  ul.onclick = function(){
    // 获取事件对象e
    var e = window.event || arguments[0];
   
    var target = e.srcElement || e.target;
    console.log(target)
    // 如果目标是a
    if(target.nodeName == "A"){
      console.log(target.nodeName)
      //找到id为product_detail下class为main_tabs下的class为current的元素，清除class.
      $("#product_detail>.main_tabs>.current").className = "";
     
      // 设置目标元素的父元素的class为current
      target.parentNode.className = "current";

      // 找到ul之后所有id以product_开头的元素，保存在contents中
      var contents = $("#product_detail>.main_tabs~[id^='product_']");
      // 如果target的i!=-1
      if(target.dataset.i != -1){
        console.log(target.dataset.i)
        // 遍历contents中每个元素
        for(var i = 0;i<contents.length;i++){
          // 如果i!=target的i
          // 隐藏当前元素
          // 否则显示
          contents[i].style.display = 
            i!=target.dataset.i?"none":"block";
        }
      }else{// 否则
        // 遍历contents中每个元素
        for(var i = 0;i<contents.length;i++){
          // 隐藏当前元素
          contents[i].style.display = "none";
        }
      }
    }
  }
  