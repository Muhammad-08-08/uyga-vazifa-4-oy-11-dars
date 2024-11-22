
try{
    document.addEventListener("DOMContentLoaded", () => {
      let container = document.querySelector(".container");
      let loading = document.querySelector(".loading");
      loading.style.display = "block";
    (async function name() {
      let res = await fetch("https://jsonplaceholder.typicode.com/photos");
      let data = await res.json();
      loading.style.display = "none";
      data.forEach((elem) => {
        let card = document.createElement("div");
        let albumId = document.createElement("h2");
        let id = document.createElement("h3");
        let title = document.createElement("h3");
        let url = document.createElement("img");
        let thumbnailUrl = document.createElement("img");
        albumId.textContent = "''albumId:'' " + elem.albumId;
        id.textContent = "''id:'' " + elem.id;
        title.textContent = "''title:'' " + elem.title;
        url.src = elem.url;
        url.style.width = "200px";
        thumbnailUrl.src = elem.thumbnailUrl;
        thumbnailUrl.style.width = "300px";
        card.append(albumId, id, title, url, thumbnailUrl);
        card.classList.add("card");
        container.append(card);
      });
    })();
  });
  } catch (error) {
    console.log("error");
  }
