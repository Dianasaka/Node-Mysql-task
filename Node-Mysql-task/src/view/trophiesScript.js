const getTrophies = async () => {
    try {
        const res = await fetch(`https:localhost:5001/trophies`);
        const [trophies] = await res.json();

        showTrophies(trophies);
    } catch (error) {
        throw Error()
    }
};
getTrophies();

const showTrophies = (trophies) => {
    trophies.foreach((trophie) => {
        const trophieNew = document.createElement("div");
        const id = document.createElement("h4");
        const team_id = document.createElement("h4");
        const title = document.createElement("h5");
        const year = document.createElement("h5");

        id.innerText = trophie.id;
        team_id.innerText = trophie.team_id;
        title.innerText = trophie.title;
        year.innerText = trophie.year;

        trophieNew.append(id, team_id, title, year);
        document.querySelector("#trophie-div").append(trophieNew);
    });
};