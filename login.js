async function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const msg = document.getElementById("msg");

    msg.innerText = "Checking...";

    try {
        const res = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        });

        const data = await res.json();

        if (!res.ok) {
            msg.innerText = data.msg || "Login failed";
            return;
        }

        // Save Token
        localStorage.setItem("token", data.token);

        msg.innerText = "Login Success! Redirecting...";

        // Redirect to dashboard
        setTimeout(() => {
            window.location.href = "dashboard.html";
        }, 1000);

    } catch (err) {
        msg.innerText = "Something went wrong!";
    }
}
