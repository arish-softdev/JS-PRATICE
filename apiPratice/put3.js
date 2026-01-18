let tasks = [];
const cardbox = document.querySelector("#cardbox");
const updateform = document.querySelector("#updateform");
const form = document.querySelector("#form");
const editname = document.querySelector("#editname");
const editemail = document.querySelector("#editemail");
const editphone = document.querySelector("#editphone");
let currentTaskid = null;

// fetch and api render
function fetchtask() {
  fetch("https://694ce310da5ddabf0037bc1a.mockapi.io/animals/user")
    .then((res) => res.json())
    .then((data) => {
      tasks = data;
      rendercards();
    })
    .catch((error) => {
      console.log("Error : failed to fetch", error);
    });
}

// render task
function rendercards() {
  cardbox.innerHTML = "";
  let output = "";

  tasks.forEach((task) => {
    output += `
      <div class="card">
        <img src="${task.avatar}" alt="${task.name}"/>
        <h3>Name : ${task.name}</h3>
        <p>Email : ${task.email}</p>
        <p>Phone : ${task.phone}</p>
        <button onclick="editask('${task.id}')">Update</button>
      </div>
    `;
  });

  cardbox.innerHTML = output;
}

// Handle the "Update" button click
function editask(id) {
  const task = tasks.find((t) => t.id === id);
  if (!task) return;

  currentTaskid = id;
  updateform.style.display = "block";
  editname.value = task.name;
  editemail.value = task.email;
  editphone.value = task.phone;
}

// Handle the form submission
form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!currentTaskid) return;

  const updatetask = {
    name: editname.value,
    email: editemail.value,
    phone: editphone.value,
  };

  fetch(
    `https://694ce310da5ddabf0037bc1a.mockapi.io/animals/user/${currentTaskid}`,
    {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatetask),
    },
  )
    .then((res) => res.json())
    .then((data) => {
      tasks = tasks.map((task) => (task.id === data.id ? data : task));
      rendercards();
      updateform.style.display = "none";
      alert("Task updated successfully");
    })
    .catch((error) => {
      console.log(error);
    });
});

// fetch tasks on page load
fetchtask();