const btn = document.querySelector("#btn");
const div = document.querySelector(".fetchdiv")

btn.addEventListener("click", fun)

async function fun() {
    const fetchdata = await fetch("https://dummyjson.com/comments");
    const convertdata = await fetchdata.json()

    let output = ""

    convertdata.comments.forEach((data) => {
        output+= `
        <div class="value">
            <h2>${ "Body : " + data.body}</h2>
            <h2>${ "PostId : " + data.postId}</h2>
            <h3>${ "Likes : " + data.likes}</h3>
            <h3>${ "User Id : " + data.user.id}</h3>
            <h3>${ "User Name : " + data.user.fullname}</h3>
        </div>`
    });
    div.innerHTML=output;

}

