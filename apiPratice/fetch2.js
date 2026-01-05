 const btn=document.querySelector("#btn");
    const fetchdiv=document.querySelector(".fetchdiv")

    btn.addEventListener("click",fetchfun);

    async function fetchfun() {
        const fetchdata=await fetch("https://694ce310da5ddabf0037bc1a.mockapi.io/animals/user")
        const fetchvalue=await fetchdata.json()

    let  outputfetch=""
        fetchvalue.forEach((data) => {
            
            outputfetch+=`
            <div class="fetch">
             <img src="${data.avatar}" alt="${"image not found"}"/>

            </div>`
        });
        fetchdiv.innerHTML=outputfetch;
    }
    