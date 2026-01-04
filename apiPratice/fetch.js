// Fetch in js 
const btn = document.querySelector("#btn");
const div = document.querySelector("#fetchdiv");

btn.addEventListener("click", fetchfun);

async function fetchfun() {
  const fetchdata = await fetch("https://dummyjson.com/carts");
  const convert = await fetchdata.json();

  let outputfetch = "";

  convert.carts.forEach((cart) => {
    cart.products.forEach((item) => {
      outputfetch += `
            <div class="cart">
                <h2>${item.title}</h2>
                <p>Price: ${item.price}</p>
                <p>Quantity: ${item.quantity}</p>
                <p>Total: ${item.total}</p>
            </div>
            `;
    });
  });

  div.innerHTML = outputfetch;
}