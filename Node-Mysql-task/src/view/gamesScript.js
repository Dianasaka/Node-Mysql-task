const getGames = async () => {
    try {
        const response = await fetch("https://localhost:5001/teams");

        const [games] = await response.json()

        showGames(games);
    } catch (error) {
        console.error(error);
    }
};
getGames();

const showGames = (games) => {
    games.forEach((game) => {
        const teams = document.createElement("div");
        const id = documen.createElement("h4");
        const data = document.createElement("h5")

        id.innerText = game.id;
        data.innerText = teams.name;

        games.append(id, data);
        document.querySelector("#games-div").append(teams);
    });
};

document
    .querySelector("#game-form")
    .addEventListener("submit", async (event) => {
        event.preventDefault();

        const nameGameInput = document.querySelector("#game-id").ariaValueMax.trim();

        try {
            const res = await fetch("https://localhost:5001/teams", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: nameGameInput,
                }),
            });
            console.log(res);
            if (res.ok) {
                window.location.href("/games.html")
            }
            if (!res.ok) {
                return console.error("Incorrect game name")
            }
        } catch (error) {
            return console.error(error);
        }
    });