function addCarrot() {
	var c = document.getElementById("carrots").innerHTML;
	c = parseInt(c);
	c = c + 1;
	document.getElementById("carrots").innerHTML = c;
	var p = document.getElementById("price").innerHTML;
	p = parseInt(p);
	p = p + 1;
	document.getElementById("price").innerHTML = p;
}

function removeCarrot() {
 	var c = document.getElementById("carrots").innerHTML;
	c = parseInt(c);
	var p = document.getElementById("price").innerHTML;
	p = parseInt(p);
	if(c==0){
		c = 0;
	}
	else{
	 c = c - 1;
	 p = p - 1;
	}
	document.getElementById("carrots").innerHTML = c;
	document.getElementById("price").innerHTML = p;
}

function addBroccoli() {
	var b = document.getElementById("broccoli").innerHTML;
	b = parseInt(b);
	b = b + 1;
	document.getElementById("broccoli").innerHTML = b;
	var p = document.getElementById("price").innerHTML;
	p = parseInt(p);
	p = p + 2;
	document.getElementById("price").innerHTML = p;
}

function removeBroccoli() {
	var b = document.getElementById("broccoli").innerHTML;
	b = parseInt(b);
	var p = document.getElementById("price").innerHTML;
	p = parseInt(p);
	if(b==0){
		b = 0;
	}
	else{
	 b = b - 1;
	 p = p - 2;
	}
	document.getElementById("broccoli").innerHTML = b;
	document.getElementById("price").innerHTML = p;
}

function addOnion() {
	var o = document.getElementById("onions").innerHTML;
	o = parseInt(o);
	o = o + 1;
	document.getElementById("onions").innerHTML = o;
	var p = document.getElementById("price").innerHTML;
	p = parseInt(p);
	p = p + 2;
	document.getElementById("price").innerHTML = p;
}

function removeOnion() {
	var o = document.getElementById("onions").innerHTML;
	o = parseInt(o);
	var p = document.getElementById("price").innerHTML;
	p = parseInt(p);
	if(o==0){
		o = 0;
	}
	else{
	 o = o - 1;
	 p = p - 2;
	}
	document.getElementById("onions").innerHTML = o;
	document.getElementById("price").innerHTML = p;
}

function addAsparagus() {
	var a = document.getElementById("asparagus").innerHTML;
	a = parseInt(a);
	a = a + 1;
	document.getElementById("asparagus").innerHTML = a;
	var p = document.getElementById("price").innerHTML;
	p = parseInt(p);
	p = p + 2;
	document.getElementById("price").innerHTML = p;
}

function removeAsparagus() {
	var a = document.getElementById("asparagus").innerHTML;
	a = parseInt(a);
	var p = document.getElementById("price").innerHTML;
	p = parseInt(p);
	if(a==0){
		a = 0;
	}
	else{
	 a = a - 1;
	 p = p - 2;
	}
	document.getElementById("asparagus").innerHTML = a;
	document.getElementById("price").innerHTML = p;
}

function addPepper() {
	var y = document.getElementById("peppers").innerHTML;
	y = parseInt(y);
	y = y + 1;
	document.getElementById("peppers").innerHTML = y;
	var p = document.getElementById("price").innerHTML;
	p = parseInt(p);
	p = p + 1;
	document.getElementById("price").innerHTML = p;
}

function removePepper() {
	var y = document.getElementById("peppers").innerHTML;
	y = parseInt(y);
	var p = document.getElementById("price").innerHTML;
	p = parseInt(p);
	if(y==0){
		y = 0;
	}
	else{
	 y = y - 1;
	 p = p - 1;
	}
	document.getElementById("peppers").innerHTML = y;
	document.getElementById("price").innerHTML = p;
}
