function updateTime(){
    const time=document.getElementById("time");
    const dateElement=document.getElementById("date");


    let date=new Date();
    //time//
    let hours=date.getHours();
    let minutes=date.getMinutes();
    let seconds=date.getSeconds();
    let ampm=hours>=12 ? "PM":"AM";

    hours=hours%12 || 12;

    time.innerHTML=`${hours.toString().padStart(2,"0")}:
    ${minutes.toString().padStart(2,"0")}:
    ${seconds.toString().padStart(2,"0")}${ampm}`;

    let day=date.getDate();
    let month=date.toLocaleString("en-US",{month:"long"});
    let year=date.getFullYear();
    let weekday=date.toLocaleString("en-US",{weekday:"long"});
  
    dateElement.innerHTML=`${weekday},${month},${day},${year}`;
}
setInterval(updateTime,1000);
updateTime();