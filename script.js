const btn = document.querySelector(".add");
const inp = document.querySelector("input");
const cancel = document.querySelector(".cancel");
const ol = document.querySelector("ol");
const listTask = document.querySelector(".list-task");
const inputImg = document.querySelector(".input-img");
const sortBtn = document.querySelector(".sort");

const tasks = [];

btn.addEventListener("click", () => {
  console.log(inp.value);
  if (inp.value.trim() === "") {
    alert("Write something");
  } else {
    listTask.style.display = "block";
    const list = document.createElement("li");
    const p = document.createElement("p");
    
    ol.append(list);
    list.append(p);
    const ulWrapper = document.getElementById("text-content");
    new Sortable(ol, {
      animation: 360,
      chosenClass: "boxShadow",
      dragClass: "drag",
    });

    p.textContent = inp.value.trim();
    const imgElement = document.createElement("img");
    list.append(imgElement);
    list.style.display = "flex";
    list.style.justifyContent = "space-between";
    list.style.width = "250px";
    imgElement.src = "/img/cancel.png";
    imgElement.classList.add("imgelement");
    tasks.push(p.textContent);
    console.log(tasks);
    imgElement.addEventListener("mouseover", (event) => {
      event.target.src = "/img/cancelfull.png";
    });

    imgElement.addEventListener("mouseleave", (event) => {
      event.target.src = "/img/cancel.png";
    });
    imgElement.addEventListener("click", () => {
      list.remove();
    });
  }
});
inputImg.addEventListener("click", () => {
  inp.value = " ";
});
inputImg.addEventListener("mouseover", (event) => {
  event.target.src = "/img/cancelfull.png";
});

inputImg.addEventListener("mouseleave", (event) => {
  event.target.src = "/img/cancel.png";
});

let t = true;
sortBtn.addEventListener("click",()=>{
    tasks.sort();
    const li = document.querySelectorAll('li') 
    if(t)
    {
      for (let i = 0; i < tasks.length; i++) {
        li[i].querySelector('p').textContent = tasks[i];
     }
     t = false;
     sortBtn.src ='/img/up.png'
     sortBtn.setAttribute('src','/img/solid up.png')
      
   dd
    }
    else{
      tasks.sort().reverse()
      for (let i = 0; i < tasks.length; i++) {
        li[i].querySelector('p').textContent = tasks[i];
     }
     t=true;
     sortBtn.src ='/img/down.png'
     sortBtn.setAttribute('src','/img/solid down.png')
      
    }    
    
})


