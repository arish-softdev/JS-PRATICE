const btn = document.querySelector("#btn");
btn.addEventListener("click", getfun);

function getfun() {
  fetch("https://6957a070f7ea690182d292af.mockapi.io/user", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error("failed to fetch");
    })
    .then((data) => {
      const box = document.querySelector(".imgbox");
      box.innerHTML += "";

      data.forEach((item) => {
        const img = `
                <div class="image">
                  <img src="${item.avatar}" alt="${item.name}"/>
                  <h3>${"Name : " + item.name}</h3>
                  <h3>${"Phone : " + item.phone}</h3>  
                </div>`;

        box.innerHTML += img;
      });
    })
    .catch((error) => {
      console.log(error.message);
    });
}
