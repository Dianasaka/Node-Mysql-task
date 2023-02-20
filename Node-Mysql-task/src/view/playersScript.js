const getPlayers = async () => {
    try {
        const response = await fetch("http://localhost:5001/players");

        const [players] = await response.json();

        showPlayers(players);
    } catch (error) {
        console.error(error);
    }
};
getPlayers();

const showPlayers = (players) => {
    players.forEach((player) => {
        const playersList = document.createElement("div");
        const id = document.createElement("h4");
        const newName = document.createElement("h5");

        id.innerText = player.id;
        newName.innerText = player.name;

        playersList.append(id, newName);
        document.querySelector("#group-div").append(newName);
    });
};

document
    .querySelector("#player-form")
    .addEventListener("submit", async (event) => {
        event.preventDefault();

        const newNameInput = document.querySelector("#player-id").value.trim();

        try {
            const res = await fetch("http://localhost:5001/players", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: newNameInput,
                }),
            });
            console.log(res);
            if (res.ok) {
                window.list.href("./trophies.html");
            }
            if (!res.ok) {
                return console.error("Incorrect player name.");
            }
        } catch (error) {
            return console.error(error);
        }
    });