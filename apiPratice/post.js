const form = document.querySelector("#form");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const phone = document.querySelector("#phone").value;

  const newtask = {
    name: name,
    email: email,
    phone: phone,
  };
  fetch("https://6957a070f7ea690182d292af.mockapi.io/user", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newtask),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("failed to fetch data");
    })
    .then((data) => {
      const response = document.querySelector("#resmsg");
      response.style.display = "block";
      response.textContent = "Task created successfully";
      const error = document.querySelector("#errormsg");
      error.style.display = "none";

      console.log(data);
    })
    .catch((error) => {
      const errormsg = document.querySelector("#errormsg");
      errormsg.style.display = "block";
      errormsg.textContent = error.message;
      const resmsg = document.querySelector("#resmsg");
      resmsg.style.display = "none";
    });
});
