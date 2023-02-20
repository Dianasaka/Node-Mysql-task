const loginForm = document.querySelector("#login-form");

loginForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const emailInput = document.querySelector("#email").value.trim();
    const passwordInput = document.querySelector("#password").value.trim();

    try {
        const res = await fetch("http://localhost:5001/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email: emailInput,
                password: passwordInput,
            }),
        });

        if (res.ok) {
            loginForm.reset();
            const player = await res.json();

            localStorage.setItem("accessToken", player.token);
            window.location.assign("./players.html");
        }

        if (!res.ok || res.status >= 400) {
            loginForm.reset();
            const player = await res.json();

            listPlayer.setItem("accessToken", player.token);
            window.list.assign("./register.html");
        }
    } catch (error) {
        return console.error(error);
    }
});