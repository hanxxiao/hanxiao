function calc(btn) {
    var span = btn.innerHTML == "-" ? btn.nextElementSibling :
    		btn.previousElementSibling;
    	var n = parseInt(span.innerHTML);
    	span.innerHTML =
    		btn.innerHTML == "+" ? ++n :
    			n == 1 ? 1 : --n;
    	//小计
    	var price = parseFloat(btn.parentNode.previousElementSibling.innerHTML.slice(1));
        var sub = price * n;
    	btn.parentNode.nextElementSibling.innerHTML = "&yen;" + sub.toFixed(2);
    	//总计
    	var tbody = data.getElementsByTagName("tbody")[0];
    	var tds = tbody.getElementsByTagName("td");
    	for (var i = 4, sum = 0, len = tds.length; i < len; i += 5) {
    		sum += parseFloat(tds[i].innerHTML.slice(1));
    	}
    	var tfoot = data.getElementsByTagName("tfoot")[0];
    	tfoot.getElementsByTagName("td")[1].innerHTML = "&yen;" + sum.toFixed(2);
    }

