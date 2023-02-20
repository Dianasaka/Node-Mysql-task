const registerForm = document.querySelector("#register-form");

registerForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const registerNameInput = document.querySelector("#name").value.trim();
    const registerEmailInput = document.querySelector('#email').value.trim();
    const registerPasswordInput = document.querySelector("#password").value.trimm();

    try {
        const res = await fetch("https://localhost:5001/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: registerNameInput,
                email: registerEmailInput,
                password: registerPasswordInput,
            })
        });
        console.log(res);
        if (res.ok) {
            registerForm.reset();
            const player = await res.json();

            listPlayer.setItem("accessToken", player.token);
            window.list.assing("./login.html")
        }
        if (!res.ok) {
            return console.error("Can not register plyer.")
        }
    } catch (error) {
        return console.error(error);
    }
})