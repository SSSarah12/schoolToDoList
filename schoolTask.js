
const range = document.getElementById("AddToProgress");

const count = document.getElementById("done");

const userContent = document.getElementById("userContent");

 const TotalTasks = document.getElementById("totalTasks");

const message = document.getElementById("message").textContent;

let tasks = [];

let countTasks = 0;
let countDone = 0; //increments each time the checkbox is checked



let checked = document.createElement(`input`);
    checked.type = "checkbox";
    checked.id = "CheckBox";
    //checked.checked = true;

function AddTasks(){

    //the number of tasks increments each time the button is clicked
    countTasks++;
    TotalTasks.textContent = `${countTasks}`;

    const DisplayTasks = document.getElementById("DisplayTask");

    const content = userContent.value ;

  

    let task = document.createElement("div");
    task.className = "taskLine";
    

    task.innerHTML = `

       <div class="TaskContentAdded">
            <input type="checkbox" id="checked" class="CheckBox">
            <p id="Content" class="Content">${content}</p>    
       </div>
       <div class="icons">
            <i class="fa-solid fa-pen-to-square edit" id="edit"></i>
            <i class="fa-solid fa-trash delete" id="delete"></i>
       </div>

    `

    //delete
    tasks.push(task);
    let deleteBtn = task.querySelector(".delete")
    deleteBtn.addEventListener("click" , ()=>{
        let index = tasks.indexOf(task);
        tasks = tasks.slice(0,index).concat(tasks.slice(index+1));
        task.remove();
        countTasks--;
        if(countDone>0){
            countDone--;
        }

        TotalTasks.textContent =`${countTasks}`;
        count.textContent = `${countDone}`;

        if(countTasks!=0){
            let percentage = Math.floor((countDone / countTasks)*100);
            console.log(percentage);
            range.style.width =  `${percentage}%`;
        }
        else{
            range.style.width = "0%"
        }
    })

    //edit
    let editBtn = task.querySelector(".edit");
    let paragraph = task.querySelector(".Content");
    editBtn.addEventListener("click" , ()=>{
        let edited = window.prompt("Enter the edited task : ") ;
        paragraph.textContent = edited;
    })

    userContent.value = "";

    DisplayTasks.appendChild(task);

    //progress and task circle [ if(checked.checked = true)]

    let checked = task.querySelector(".CheckBox");
    let doneContent = task.querySelector("#Content");

    //listen for checkbox change
    checked.addEventListener("change" , () => {
        if(checked.checked){
            countDone++;
            doneContent.style.textDecoration = "line-through aqua";
        }
        else{
            countDone--;
            doneContent.style.textDecoration = "none";
        }
        count.textContent = `${countDone}`;
        let percentage = Math.floor((countDone / countTasks)*100);
        range.style.width =  `${percentage}%`;
         

        if(countDone === countTasks){
            alert( "Congrats");
            
        }
        else{
            message.textContent = "Keep it up!";
        }
          

    });
 
//     deleteBtn.addEventListener("click" , (event)=>{
//         Remove(event.target);
//     })
    
    // function Delete(index){
    //     let newTasks =         
    // }
    // deleteBtn.addEventListener("click", () => {
    //     task.remove();
    // });
}
