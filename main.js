menu_list_array = ["Veg Margherita Pizza (Veg)","BBQ chicken French bread pizza ( Non Veg)","Thai chicken pizza ( Non Veg)","Peppy Paneer Pizza (Veg)","Chicken Alfredo pizza ( Non Veg)","Deluxe Veggie Pizza (Veg)","Barbecue chicken pizza ( Non Veg)","Chicken pesto pizza ( Non Veg)","Chicken fajita pizza ( Non Veg)","Mexican Green Wave Pizza (Veg)","Double Cheese Margherita Pizza (Veg)","Veg Extravaganza Pizza (Veg)","Cheese and Corn Pizza (Veg)"];

function getmenu(){
    var htmldata;
    htmldata="<ol class='menulist'>"
    menu_list_array.sort();
    for(var i=0;i<menu_list_array.length;i++){
        htmldata=htmldata+'<li>' + menu_list_array[i] + '</li>'
    }
     htmldata=htmldata+"</ol>"
     document.getElementById("display_menu").innerHTML = htmldata;
}

function add_item(){
    var htmldata;
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
    menu_list_array.sort();
    htmldata="<section class='cards'>"
    for(var i=0;i<menu_list_array.length;i++){

        htmldata=htmldata+'<div class="card">' +'<img src="https://i.postimg.cc/YSF6PrmY/pizzaImg.png"/>' + menu_list_array[i] + '</div>'
    }
      htmldata=htmldata+"</section>"
      document.getElementById("display_addedmenu").innerHTML = htmldata;
}