//Naudojant tik JS, sukurkite lentelę ir į ją įrašykite duomenis (id, name, city, fav_color).
//Naudojant JS metodus, padalinkite vardą į dvi dalis: vardą ir pavardę (lentelėje).
//Pridėkite prie lentelės (tarp id ir name) nuotrauką.
//Sukurkite checkbox virš lentelės su JS. Jį paspaudus, rodys tik tuos žmones, kurie yra VIP.
//Sukurkite virš lentelės ir search laukelį (forma su input type search ir mygtukas). Suvedus duomenis, lentelėje turi prasifiltruoti pagal vardą arba pavardę (fullname contains search string). Capitalizacija turėtų būti nesvarbi.

const state = {};

    const createCheckbox = () => {
        const checkbox = document.createElement('INPUT');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.setAttribute('id','isVipCheckbox');
        document.body.append(checkboxLabel);

    const checkboxLabel = document.createElement('label');
    checkboxLabel.setAttribute('for', 'isVipCheckbox');
    checkboxLabel.textContent = VIP;
    document.body.append(checkboxLabel);
    }

    const createSearchForm = () => {
        const searchBox = document.createElement('INPUT');
        searchBox.setAttribute('type' ,'search');
        searchBox.setAttribute('id','search');
        searchBox.setAttribute('name', "search");
        document.body.appendChild(searchBox);

        const searchButton = document.createElement('button');
        searchButton.innerHTML = 'Search for name';
        searchButton.setAttribute('id', "searchButton");

        const form = document.createElement('form');
        form.append(searchBox, searchButton);
        document.body.append(form);
    }

    const createTableSkeleton = () => {
        const id = documet.createElement('th');
        id.textContent = 'ID';

        const image = document.createElement('th');
        image.textContent = 'Image';

        const firstName = document.createElement('th');
        firstName.textContent = 'Fisrt name';

        const lastName = document.createElement('th');
        lastName.textContent = "Last name";

        const city = document.createElement('th');
        city.textContent = "City";

        const favColor = document.createElement('th');
        favColor.textContent = 'Fav color';

        const tr = document.createElement('tr');
        tr.append(id, image, firstName, lastName, city, favColor);

        const thead = document.createElement('thead');
        thead.append(tr);

        const table =document.createElement('table');
        table.append(thead, document.createElement('tbody'));
        document.body.append(table);
    }

    function renderTable(robots) {
        const tbody = document.querySelector('tbody');
        tbody.innerHTML = '';

        robots.forEach(robot => {
            const id = document.createElement('td');
            id.textContent = robot.id

            const img = document.createElement('img');
            img.src = robot.image;
            img.setAttribute('alt', 'UserPicture');
            const image = document.createElement('td');
            image.append(img);

            const [name, surname] = robot.name.split('');

            const firstName = documnet.createElement('td');
            firstName.textContent = name;

            const lastName = document.createElement('td');
            lastName.textContent = surname;

            const city = document.createElement('td');
            city.textContent = robot.city;

            const favColor = document.createElement('td');
            favColor.textContent = robot.fav_color;

            const tr = document.createElement('tr');
            tr.append(id, image, firstName, lastName, city, favColor);
            tbody.apppend(tr);
        });
    }

    createCheckbox();
    createSearchForm();
    createTableSkeleton();

    document.querySelector('form').addEventListener('submit',(event) => {
    event.preventDefault();
    const searchString = document.getElementById('search').value.toLowerCase();
    renderTable(state.robots.filter(robot => robot.name.toLowerCase().includes(searchString)));
})

document.getElementById('isVipCheckbox').addEventListener('change', (event) => {
  renderTable(event.target.checked ? state.robots.filter(robot => robot.vip) : state.robots);
});

async function fetchData() {
  try {
    let response = await fetch('https://magnetic-melon-yam.glitch.me');
    if (response.ok) {

      state.robots = await response.json();
      renderTable(state.robots);
    }
  } catch (error) {

    console.error(error);
  }
}

fetchData();
