
  auth.signInWithEmailAndPassword("leelillian205@gmail.com", "1234567").then(cred => {
      console.log(cred);
      sortByDate();
}).catch(err => {
  console.log(err);
})
document.getElementById("submitBtn").addEventListener("click",function(){
    let newEvent="";
    if (document.getElementById("priorityCheck").checked){
        newEvent = `<div class="eventPriority">
        <div id="eventh5">${document.getElementById("title").value}</div>
        <div id="eventh6">${getDate().mth}/${getDate().day}/${getDate().yr} @ ${getTime()}</div>
    </div>`
    }
    else{
     newEvent = `<div class="event">
                    <div id="eventh5">${document.getElementById("title").value}</div>
                    <div id="eventh6">${getDate().mth}/${getDate().day}/${getDate().yr} @ ${getTime()}</div>
                </div>`
    }
        document.getElementById("eventsSpace").innerHTML += newEvent;
        const inputArr = document.getElementsByTagName("input");
        for(let i=0;i<3;i++){
            inputArr[i].value = "";
        }
        document.getElementById("priorityCheck").checked=false;
});

function getDate(){
    let mmm = document.getElementById("datee").value;
    let date = {
        yr :mmm.substring(0,4),
        mth : mmm.substring(5,7),
        day : mmm.substring(8,10)
    }
    return date;
}

function getTime(){
    let str = document.getElementById("timee").value;
    if (parseInt(str.substring(0,2)) > 12){
        return `${parseInt(str.substring(0,2))-12}:${str.substring(3,5)}PM`;
    } 
    return str+"AM";
}

//backendstuff
document.getElementById("submitBtn").addEventListener("click", (e) => {
    const reminder_title = document.getElementById("title").value;
    const reminder_time = document.getElementById("timee").value;
    const reminder_date = document.getElementById("datee").value;
    const reminder_priority = document.getElementById("priorityCheck").checked;
  
    db.collection(uid).doc().set({
        title: reminder_title,
        time: reminder_time,
        date: reminder_date,
        priority: reminder_priority,
        month: parseInt(reminder_date.substring(5, 7))
    });
    console.log("success")
  })

  function sortByDate(){
    getAllReminder().then(e=>{
        console.log(e);
    });
  }