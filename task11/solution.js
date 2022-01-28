const API_URL = "https://randomuser.me/api?results=50";
const result = document.getElementById("result");
const filter = document.getElementById("filter");

async function getData() {
  const response = await fetch(API_URL);
  const { results } = await response.json();
  result.innerHTML = "";

  const namable = (person) => {
    const {
      picture: { medium: imageUrl },
    } = person;
    const {
      name: { first },
    } = person;
    const {
      name: { last },
    } = person;
    const fullName = `${first} ${last}`;
    const {
      location: { city },
    } = person;
    const {
      location: { country },
    } = person;

    return { imageUrl, fullName, city, country };
  };

  //clear result
  results.map((person) => {
    const list = document.createElement("div");
    const { imageUrl, fullName, city, country } = namable(person);
    list.className = "user-list";
    list.innerHTML = `<li><img src="${imageUrl}" alt="${fullName}"><div class='user-info'><h4 class='user-info'>${fullName}</h4> <p class='user-info'>${city}, ${country}</p></div></li>`;
    result.insertAdjacentElement("beforeend", list);
  });

  filter.addEventListener("keyup", () => {
    const inputValue = filter.value.trim();
    const filtered = results.filter(
      (person) => person.name.first === inputValue
    );

    if (filtered) {
      filtered.map((person) => {
        result.innerHTML = "";
        const list = document.createElement("div");
        const { imageUrl, fullName, city, country } = namable(person);
        list.className = "user-list";
        list.innerHTML = `<li><img src="${imageUrl}" alt="${fullName}"><div class='user-info'><h4 class='user-info'>${fullName}</h4> <p class='user-info'>${city}, ${country}</p></div></li>`;
        result.insertAdjacentElement("beforeend", list);
      });
    }
  });
}

getData();
