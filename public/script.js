let currentdate=new Date();
let hrs=currentdate.getHours();
let am_pm="AM";
let minutes=currentdate.getMinutes();
if(hrs>12){
    hrs-=12;
    am_pm="PM"
}
const time=hrs+":"+minutes+" "+am_pm;
const days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let daynumber=currentdate.getDay();

let datenumber=currentdate.getDate();

const months=["Jan","Feb","Mar","Apr","May","Jun","July","Aug","Sept","Oct","Nov","Dec"];
let monthnumber=currentdate.getMonth();

let year=currentdate.getFullYear();

const now=document.getElementById('now');
now.innerText=`${datenumber} ${months[monthnumber]} | ${days[daynumber]} | ${time}`;