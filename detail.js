function myFunction(){
    var adult= document.getElementById("inputAdult").value;
    var toDate= document.getElementById("inputToDate").value;
    var fromDate = document.getElementById("inputFromDate").value;
    const dateone=new date(d1);
    const datetwo=new date(d2);
    const time=Math.abs(datetwo-dateone);
    const days=Math.ceil(time/(1000*60*60*24));
    document.getElementById('inputTotal').value=1000*days*adult;
}