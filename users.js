document.addEventListener("DOMContentLoaded", () => {
  let container = document.querySelector(".container");
  let loading = document.querySelector(".loading");
  loading.style.display = "block";

  try{
    (async function name() {
      let res = await fetch("https://jsonplaceholder.typicode.com/users");
      let data = await res.json();
      loading.style.display = "none";
      data.forEach((elem) => {
        let card = document.createElement("div");
        let id = document.createElement("h3");
        let name = document.createElement("h3");
        let username = document.createElement("h2");
        let email = document.createElement("h3");
        let street = document.createElement("h3");
        let suite = document.createElement("h3");
        let city = document.createElement("h3");
        let zipcode = document.createElement("h3");
        let lat = document.createElement("h3");
        let lng = document.createElement("h3");
        let phone = document.createElement("h3");
        let website = document.createElement("h3");
        let company = document.createElement("h3");
  
        id.textContent = "''id:'' " + elem.id;
        name.textContent = "''name:'' " + elem.name;
        username.textContent = "''username:'' " + elem.username;
        email.textContent = "''email:'' " + elem.email;
        street.textContent = "''street:'' " + elem.address.street;
        suite.textContent = "''suite:'' " + elem.address.suite;
        city.textContent = "''city:'' " + elem.address.city;
        zipcode.textContent = "''zipcode:'' " + elem.address.zipcode;
        lat.textContent = "''lat:'' " + elem.address.geo.lat;
        lng.textContent = "''lng:'' " + elem.address.geo.lng;
        phone.textContent = "''phone:'' " + elem.phone;
        website.textContent = "''website:'' " + elem.website;
        company.textContent =
          "''name:'' " +
          elem.company.name +
          ", ''catchPhrase:'' " +
          elem.company.catchPhrase +  
          ", ''bs:'' " +
          elem.company.bs;
        card.append(
          id,
          name,
          username,
          email,
          street,
          suite,
          city,
          zipcode,
          lat,
          lng,
          phone,
          website,
          company
        );
        card.classList.add("card");
        container.append(card);
      });
    })();
  } catch (error) {
    console.log("error");
  }
});
