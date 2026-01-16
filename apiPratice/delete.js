let tasks = [];
const cardbox = document.querySelector("#cardbox");

// fetch function start
function fetchtask() {
  fetch("https://694ce310da5ddabf0037bc1a.mockapi.io/animals/user")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      tasks = data;
      renderfun();
    })
    .catch((error) => {
      console.log(error);
    });
}

// render function start
function renderfun() {
  cardbox.innerHTML = "";
  let output = "";
  tasks.forEach((task) => {
    output += `
        <div class="card">
         <img src="${task.avatar}" alt="${task.name}"/>
         <h2>${task.name}</h2>
         <p>${task.email}</p>
         <p>${task.phone}</p>
         <button onclick="deleteTask('${task.id}')"/>Delete </button>
         </div>   
           `;
    cardbox.innerHTML = output;
  });
}

// delete function starting

function deleteTask(id) {
  fetch(`https://694ce310da5ddabf0037bc1a.mockapi.io/animals/user/${id}`, {
    method: "DELETE",
  })
    .then((res) => {
      if (res.ok) {
        tasks = tasks.filter((task) => {
          return task.id !== id;
        });
        renderfun();
        alert("Task Deleted successfully");
      } else {
        throw new Error("Error Deleting Task :", error);
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

// fetch on page load

fetchtask();
