const targetTime = new Date().getTime() + 10 * 1000; 

    function updateCountdown() {
        const now = new Date().getTime();
        const remainingTime = targetTime - now;

        if (remainingTime <= 0) {
            window.location.href = "site.html"; // Redireciona para o site
        } else {
            const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
            document.getElementById("countdown-timer").textContent = `${seconds}s`;
        }
    }

    setInterval(updateCountdown, 1000);