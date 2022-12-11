const task = document.querySelector('input');
const description = document.querySelector('textarea');
const ul = document.querySelector('ul');
const addBtn = document.querySelector(".form button");
addBtn.addEventListener("click",(e)=>{
  if(task.value !== ""){
    let liHtml =`
    <p class="li__title">${task.value} : </p>
    <p class="li__desc">${description.value}</p>
    <div class = "btn-div">
    <button class="done-btn">Done</button>
    <button class="delete-btn">Delete Task</button>
    </div>`
    let li = document.createElement("li") ;
    li.innerHTML = liHtml;
    ul.append(li); 
  }
})
ul.addEventListener("click",(e)=>{
  if(e.target.classList.contains("done-btn")){

    const liItem =  e.target.parentNode.parentNode.querySelectorAll("p");

    if(e.target.innerText==='Done'){
     liItem.forEach(element => element.style.textDecoration="line-through")
    e.target.innerText = "Not Done";
    }
    else if(e.target.innerText==='Not Done'){
     liItem.forEach(element => element.style.textDecoration="none")
     e.target.innerText = "Done";
    }
  }
  else if(e.target.classList.contains("delete-btn")){
    e.target.parentNode.parentNode.remove();
  }
})
