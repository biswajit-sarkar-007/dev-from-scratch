// fetch vs axios

// function main() {
//   fetch("http:localhost:8080/todos").then(async (response) => {
//     const json = await response.json();
//     console.log(json.todos);
//   });
// }
//main();




// async function main() {
//   const resposen = await fetch("http:localhost:8080/todos").then(async (response) => {
//     const json = await response.json();
//     console.log(json.todos);
//   });
// }
// main();



// const axios = require("axios")

// async function main(){
//     const response = await axios.get("http://localhost:8080/todos");
//     console.log(response.data.todos);

// }
// main()




// async function main(){
//     const response = await fetch("https://www.postb.in/1758790686020-9312794217839", {
//         method:"POST"
//     })
//     const textInfo = await response.text() // here we use reposne.text()  not reponse.json() becase here the output is not in json formate its text formate this is one drawback of fetch
//     console.log(textInfo);

// }
// main()



const { default: axios } = require("axios");
async function main() {
  const reponse = await axios.post(
    "https://www.postb.in/1758790686020-9312794217839"
  );
  console.log(reponse.data);
}
main();
