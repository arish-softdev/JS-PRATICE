const btn=document.querySelector("#btn")
    btn.addEventListener("click",getfun)
    function getfun() {
        fetch("https://694ce310da5ddabf0037bc1a.mockapi.io/animals/user",{
            method:"GET",
            headers:{"Content-Type":"application/json"}
        })
        .then((res)=>{
            if (res.ok) {
                return res.json()
            }
            throw new Error("Failed to Fetch");
            
        })
        .then((data)=>{
            const box=document.querySelector("#fetchdiv")
            box.innerHTML=""

            data.forEach((item) => {
                const image=`
                <div class="image">
                 <img src="${item.avatar}" alt="${item.name}"/>
                 <p>${"Name : "+ item.name}</p>   
                </div>`
                  box.innerHTML+=image
            });
         
        })
        .catch((error)=>{
            console.log(error);
            
        })
    }
    getfun()