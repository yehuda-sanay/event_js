//שאלה 1
// function prsmes(){
//     alert("yehuda");
// }
// prsmes()
//שאלה 2 
// function printname(){
//     var shela2=document.getElementById("num2");
//     console.log("yehuda sanay");
// }
//שאלה 3 
// function chanceColor(){
//     var shela3=document.getElementById("num3");
//     shela3.style.color="red";
// }
//שאלה 4 
// function h1Toh3(){
//     var shela4=document.getElementById("num4");
//     shela4.style.fontSize="150px";
// }
//שאלה 5 
// function changeText(){
//    var shela6=document.getElementById("yehuda");
//     shela6.innerHTML="haim";
// }


// שאלה 6 לא סיימתי
// var nameUser=prompt("inter your name");
// function printUserName(){
// var shela6=document.getElementById("but");
// shela6=document.body.innerHTML=nameUser
// }


//שאלה 7
// var mydate=new Date("10");
// if(mydate.getHours()>"12"){
// document.body.style.background="yellow";
// masege.innerHTML="good day";
// }
// else{
//     document.body.style.background="blue";
//     masege.innerHTML="good evning";
// }



//שאלה 8 
// var gil=prompt();
// var bruhim=document.getElementById("shela8");
// bruhim.onmouseover=function(){
//     this.style.color="green";
// }
// if(gil>18){
//     document.body.style.backgroundColor="red";
// }
// else{
//     document.body.style.backgroundColor="blue";
// }



//שאלה 9
//להמשיך את השאלה
// function printUserNumber(){
//     var myarray=[];
//     for(var i=0; i<5;i++){
//         var loto=prompt("inter number 0-56");
//         myarray.push(loto);
//     }  
//         document.getElementById("but").innerHTML+=myarray;     
    

//    var loto2= Math.floor(Math.random()*57);
//    document.body.innerHTML+=loto2;
//    for(var j=0;j<myarray.length;j++){
//    if(myarray[j]==loto2){
//        document.body.innerHTML+="good work";
//    }
//    else{
//        document.body.innerHTML+="bad work";
//    }
//    }
// }
// printUserNumber()

//02.06.22
// var userdate2=document.getElementById("userdate");
// var username2 = document.getElementById("username");
// var userunput =new Date();
// function ifUserUp18Yo(){
//     if(userunput.getFullYear()-getyears(userdate2.value)>18){
//   msg_wel.innerHTML ="<h1 style= 'color:blue';>"+"welcome"+" "+ username2.value+"</h1>";
    

// }
//     else{
//     msg_wel.innerHTML="<h1 style='color:red';>"+"bye"+" "+username2.value+"</h1>";
//     }
// }

// function getyears(str){
//     var year="";
//     for(var i=0;i<str.length;i++){
//         year+=str[i]
//         if (str[i]=="-"){
//             return parseInt (year)
//         }
//     }
// }

// function changeColor(){
//     msg_wel.innerHTML ="<h1 style= 'color:green';>"+"welcome"+" "+ username2.value+"</h1>";
//     msg_wel.innerHTML="<h1 style='color:green';>"+"bye"+" "+username2.value+"</h1>";
// }
// var inp=document.createElement("input");
// inp.type="text";
// inp.id="firstname";
var myarray=[];
function pussFirstName(){
    var i=0;
    while(i<4){
var elem = document.createElement("input");
elem.type = "text";
elem.id = "firstname";
document.body.appendChild(elem);
elem.value = "This is some text";
i++

}
myarray.push(firstname).value;
}
// function pussslastname(){
//     var userfamilyname=document.getElementById("family");

// }
// function printNameAndFamily(){
// for(var j=0;j<firstNameArray.length;j++){
// document.body.innerHTML="<h1>"+firstNameArray[0]+" "+userfamilyname.value+"</h1>";
// }
// }
// printNameAndFamily(pussFirstName)

// firstname.addEventListener("click",userfirstname());











