let task = [];
const cardbox = document.querySelector("#cardbox");
const updateform = document.querySelector("#updateform");
const form = document.querySelector("#form");
const editname = document.querySelector("#editname");
const editemail = document.querySelector("#editemail");
const editphone = document.querySelector("#phone");
let currentTaskid = null;

// fetch

function fetchtask() {
    fetchtask("https://694ce310da5ddabf0037bc1a.mockapi.io/animals/user")
    .then((res) => res.json())
    .then((data) => {
        tasks = data;
        rendercards();
    })
    .catch((err) => {
        console.log("Error : faild to fetch", err);
        
    })
}