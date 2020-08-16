var orderVal = 0;

function appendItem(addval,itemID){
	var item=document.createElement("li"); //create list element
	var add=document.createTextNode(addval);	//create text node and assign tov= valiable
	item.appendChild(add); //add text node to list element
	document.getElementById(itemID).appendChild(item); //append list element to list
}

window.onscroll= function(){stickyBar()};

var fontCh=document.getElementById("fontC");
var sticky=document.getElementById("fontC").offsetTop; //get offset position of the div element

function stickyBar(){
	if(window.pageYOffset>=sticky){
		fontCh.classList.add("sticky") //add sticky class to the div element
	}
	else{
		fontCh.classList.remove("sticky"); 
	}
}

function pageUp(){
	window.scrollTo(0,0); //scroll to page top
}

function pageDown(){
	window.scrollTo(0, document.body.scrollHeight); //scroll to page bottom
}

var size=100;

function increaseSize(value){
	size=size+2; //increase font size percentage by 2%
	if (size<=150){ //limit font size increase to 150%
		var sizeVal=(size+"%")
		document.getElementById(value).style.fontSize=sizeVal; //assign new font size value
	}
	else{
		var sizeVal=size;
		document.getElementById(value),style.fontSize=sizeVal;	
	}
}

function decreaseSize(value){
	size=size-2; //decrease font size percentage by 2%
	if (size>=40){
		var sizeVal=(size+"%")
		document.getElementById(value).style.fontSize=sizeVal; //assign new font size value
	}
	else{
		var sizeVal=size;
		document.getElementById(value),style.fontSize=sizeVal;	
	}
}

function addOrder(name,itemval,qty){ //read quantity, name and price of item
	var item, order,counter,quantity,cost;
	item=document.getElementById(name).innerText;
	order=document.getElementById(itemval).innerText;
	quantity=document.getElementById(qty).value;
	if (quantity==0){
		alert("please enter quantity");
	}
	else{
		cost=parseFloat(order*quantity);
		orderVal=orderVal+cost;
		var message= ("You added "+quantity+" "+item+" worth Rs "+cost+" to your order");
		var orderD = ("Your total order : Rs "+orderVal);
		//add values to lists in the order div
		displayMsg(message);
		appendItem(item,"itemN");
		appendItem(quantity,"itemQ");
		appendItem(("Rs."+cost),"itemP");
		document.getElementById("sum").innerHTML="Rs."+orderVal;
		document.getElementById("total").innerHTML= (orderD);
	}
			
}

function addItem(name,itemval,qty,colS,siseS){
	var item,order, colorSel,cost, sizeSel,  quantity;
	colorSel=document.getElementById(colS).value;
	sizeSel=document.getElementById(siseS).value;
	quantity=document.getElementById(qty).value;
	if (colorSel=="color"){
		alert("Please select a color");
	}
	else if (sizeSel=="size"){
		alert("Please select a size");
	}
	else if (quantity==0){
		alert("please enter quantity");
	}
	else{
		item=document.getElementById(name).innerText;
		order=document.getElementById(itemval).innerText;		
		cost=parseFloat(order*quantity);
		orderVal=orderVal+cost;
		var message= ("You added "+quantity+" "+colorSel+" "+item+" of size "+sizeSel+" worth Rs "+cost+" to your order");
		var orderD = ("Your total order : Rs "+orderVal);
		//add values to lists in the order div
		displayMsg(message);
		appendItem(item,"itemN");
		appendItem(quantity,"itemQ");
		appendItem(("Rs."+cost),"itemP");
		document.getElementById("sum").innerHTML="Rs."+orderVal;
		document.getElementById("total").innerHTML= (orderD);
	}
			
}


function addOrderMug(name,itemval,qty,colorM){
	var item,order,mugc,quantity,cost;
	mugc=document.getElementById(colorM).value;
	quantity=document.getElementById(qty).value;
	if (mugc=="color"){
		alert("Plese select a color");
	}
	else if (quantity==0){
		alert("please enter quantity");
	}
	else{
		item=document.getElementById(name).innerText;
		order=document.getElementById(itemval).innerText;
		cost=parseFloat(order*quantity);
		orderVal=orderVal+cost;
		var message= ("You added "+quantity+" "+item+" of color "+ mugc+" worth Rs "+cost+" to your order");
		var orderD = ("Your total order : Rs "+orderVal);
		//add values to lists in the order div
		displayMsg(message);
		appendItem(item,"itemN");
		appendItem(quantity,"itemQ");
		appendItem(("Rs."+cost),"itemP");
		document.getElementById("sum").innerHTML="Rs."+orderVal;
		document.getElementById("total").innerHTML= (orderD);
	}
}

function displayMsg(msg){
	document.getElementById("mesDisplay").innerHTML=(msg); //set inner value of the div element
	document.getElementById("mesDisplay").style.display="block"; //display item added to cart message
	setTimeout(function(){
		document.getElementById("mesDisplay").style.display="none"; //remove message
	},2000);  //display message for 2 seconds

}

		
function displayBackM(){
	var colorMen=document.getElementById("menscol").value;
	switch(colorMen){
		case"white":
			document.getElementById("mensT").src="images/Mwhite2.png"; //change images for case values
			break
		case"black":
			document.getElementById("mensT").src="images/Mblack2.png";
			break
		case"green":
			document.getElementById("mensT").src="images/Mgreen2.png";
			break
		case"blue":
			document.getElementById("mensT").src="images/Mblue2.png";
			break
		case"maroon":
			document.getElementById("mensT").src="images/Mmaroon2.png";
			break
		case"charcoal":
			document.getElementById("mensT").src="images/Mgrey2.png";
			break
		case"navy":
			document.getElementById("mensT").src="images/Mnavy2.png";
			break
		case"sport_grey":
			document.getElementById("mensT").src="images/Mlgrey2.png";
			break
		default:
			document.getElementById("mensT").src="images/Mwhite2.png";
	}
}	

function changecolM(){
	var colorM=document.getElementById("menscol").value;
	switch(colorM){
		case"white":
			document.getElementById("mensT").src="images/Mwhite1.png";
			break
		case"black":
			document.getElementById("mensT").src="images/Mblack1.png";
			break
		case"green":
			document.getElementById("mensT").src="images/Mgreen1.png";
			break
		case"blue":
			document.getElementById("mensT").src="images/Mblue1.png";
			break
		case"maroon":
			document.getElementById("mensT").src="images/Mmaroon1.png";
			break
		case"charcoal":
			document.getElementById("mensT").src="images/Mgrey1.png";
			break
		case"navy":
			document.getElementById("mensT").src="images/Mnavy1.png";
			break
		case"sport_grey":
			document.getElementById("mensT").src="images/Mlgrey1.png";
			break
		default:
			document.getElementById("mensT").src="images/Mwhite1.png";
	}
}

function displayBackW() {
	var womenColor=document.getElementById("womenscol").value;
	switch(womenColor){
		case"white":
			document.getElementById("womensT").src="images/Wwhite2.png";
			break
		case"black":
			document.getElementById("womensT").src="images/Wblack2.png";
			break
		case"green":
			document.getElementById("womensT").src="images/Wgreen2.png";
			break
		case"blue":
			document.getElementById("womensT").src="images/Wblue2.png";
			break
		case"maroon":
			document.getElementById("womensT").src="images/Wmaroon2.png";
			break
		case"charcoal":
			document.getElementById("womensT").src="images/Wcharcoal2.png";
			break
		case"navy":
			document.getElementById("womensT").src="images/Wnavy2.png";
			break
		case"sport_grey":
			document.getElementById("womensT").src="images/Wmgrey2.png";
			break
		default:
			document.getElementById("womensT").src="images/Wwhite2.png";
	}
}


function changecolW(){
	var colorW=document.getElementById("womenscol").value;
	switch(colorW){
		case"white":
			document.getElementById("womensT").src="images/Wwhite1.png";
			break
		case"black":
			document.getElementById("womensT").src="images/Wblack1.png";
			break
		case"green":
			document.getElementById("womensT").src="images/Wgreen1.png";
			break
		case"blue":
			document.getElementById("womensT").src="images/Wblue1.png";
			break
		case"maroon":
			document.getElementById("womensT").src="images/Wmaroon1.png";
			break
		case"charcoal":
			document.getElementById("womensT").src="images/Wcharcoal1.png";
			break
		case"navy":
			document.getElementById("womensT").src="images/Wnavy1.png";
			break
		case"sport_grey":
			document.getElementById("womensT").src="images/Wmgrey1.png";
			break
		default:
			document.getElementById("womensT").src="images/Wwhite1.png";
	}
}

function changeMug(){
	var mugCol=document.getElementById("mugC").value;
	switch(mugCol){
		case"white":
			document.getElementById("mugImg").src="images/Dwhite1.png";
			break
		case"teal":
			document.getElementById("mugImg").src="images/Dteal1.png";
			break
		case"green":
			document.getElementById("mugImg").src="images/Dgreen1.png";
			break
		case"brown":
			document.getElementById("mugImg").src="images/Dbrown1.png";
			break
		case"skyblue":
			document.getElementById("mugImg").src="images/Dlight1.png";
			break
		case"grey":
			document.getElementById("mugImg").src="images/Dgrey1.png";
			break
		case"blue":
			document.getElementById("mugImg").src="images/Dblue1.png";
			break
		default:
			document.getElementById("mugImg").src="images/Dwhite1.png";
	}
}

function displayMugBack(){
	var mugB=document.getElementById("mugC").value;
	switch(mugB){
		case"white":
			document.getElementById("mugImg").src="images/Dwhite2.png";
			break
		case"teal":
			document.getElementById("mugImg").src="images/Dteal2.png";
			break
		case"green":
			document.getElementById("mugImg").src="images/Dgreen2.png";
			break
		case"brown":
			document.getElementById("mugImg").src="images/Dbrown2.png";
			break
		case"skyblue":
			document.getElementById("mugImg").src="images/Dlight2.png";
			break
		case"grey":
			document.getElementById("mugImg").src="images/Dgrey2.png";
			break
		case"blue":
			document.getElementById("mugImg").src="images/Dblue2.png";
			break
		default:
			document.getElementById("mugImg").src="images/Dwhite2.png";
	}
}

function displayFront(idName){
	var idVal=idName;
	if (idVal=="Tbag"){  
		document.getElementById("Tbag").src="images/recycle.png";
	}
	else{
		document.getElementById(idName).src="images/GWbag.png";
	}
}


function displayBack(itemID){  //display back image 
	document.getElementById(itemID).src="images/bag.png";
}

function redirect(){
	if (orderVal==0){
		alert("Please add items to order");
	}
	else{
		window.scrollTo(0,0);
		document.getElementById("forminfo").style.display="block";
	}
} 


function validation(){ //validate form inputs 
	var fname=document.forms["customer"]["Fname"].value;
	var lname=document.forms["customer"]["Lname"].value;
	var contact=document.forms["customer"]["contactNum"].value;
	var ad1=document.forms["customer"]["address1"].value;
	var ad2=document.forms["customer"]["address2"].value;
	var city=document.forms["customer"]["city"].value;
	var country=document.forms["customer"]["country"].value;
	if (fname==""||lname==""||contact==""||ad1==""||ad2==""||city==""||country==""){
		alert("Please fill all the required fields"); //display error message		
	}
	else{
		document.getElementById("forminfo").style.display="none" //remove form 
		document.getElementById("form1").reset(); //clear form values
		window.scrollTo(0,0);
		document.getElementById("orderinfo").style.display="block";  //display order details
	}
}

function closeOrder(){
	document.getElementById("orderinfo").style.display="none"; //remove order details
}

function closeForm(){
	document.getElementById("forminfo").style.display="none";
}

