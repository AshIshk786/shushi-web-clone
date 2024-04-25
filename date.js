
var date=new Date();
var year=date.getFullYear();
var month=String(date.getMonth()+1).padStart(2,'0');
var todaydate=String(date.getDate()).padStart(2,'0');
var fulldate=year+'-'+month+'-'+todaydate;
var fillup=document.getElementById("date_selector").value=fulldate;
