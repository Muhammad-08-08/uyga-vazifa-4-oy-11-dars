
try{
    document.addEventListener("DOMContentLoaded", () => {
      let container = document.querySelector(".container");
      let loading = document.querySelector(".loading");
      loading.style.display = "block";
    (async function name() {
      let res = await fetch("https://jsonplaceholder.typicode.com/comments");
      let data = await res.json();
      loading.style.display = "none";
      data.forEach((elem) => {
        let card = document.createElement("div");
        let postId = document.createElement("h2");
        let id = document.createElement("h3");
        let body = document.createElement("h3");
        let name = document.createElement("h2");
        let email = document.createElement("h3");
        postId.textContent = "''postId:'' " + elem.postId;
        id.textContent = "''id:'' " + elem.id;
        name.textContent = "''name:'' " + elem.name;
        email.textContent = "''email:''  " + elem.email;
        body.textContent = "''body:'' " + elem.body;
        card.append(postId, id, name, email, body);
        card.classList.add("card");
        container.append(card);
      });
    })();
  });
  } catch (error) {
    console.log("error");
  }