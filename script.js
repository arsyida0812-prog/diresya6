function login() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    if (user === "") {
        alert("Nama harus diisi!");
        return;
    }

    if (pass === "12345678") {
        document.getElementById("loginPage").classList.add("hidden");
        document.getElementById("mainPage").classList.remove("hidden");
        alert("Selamat datang, " + user + " 👋");
    } else {
        alert("Password salah! Gunakan password: 12345678");
    }
}

function logout() {
    document.getElementById("mainPage").classList.add("hidden");
    document.getElementById("logoutPage").classList.remove("hidden");
}

function backToLogin() {
    document.getElementById("logoutPage").classList.add("hidden");
    document.getElementById("loginPage").classList.remove("hidden");
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
}

function processImage(event) {
    const img = document.getElementById("preview");
    img.src = URL.createObjectURL(event.target.files[0]);
    img.style.display = "block";

    // SIMULASI AI
    const hasil = [
        {
            label: "Lingkungan Bersih 🌱",
            edu: "Lingkungan bersih mencerminkan kesadaran sosial dan pola hidup sehat."
        },
        {
            label: "Lingkungan Tercemar 🏭",
            edu: "Lingkungan tercemar membutuhkan edukasi sosial untuk mengurangi dampak limbah."
        },
        {
            label: "Lingkungan Hijau 🌳",
            edu: "Lingkungan hijau mendukung keberlanjutan dan keseimbangan ekosistem."
        }
    ];

    const random = hasil[Math.floor(Math.random() * hasil.length)];

    document.getElementById("resultBox").classList.remove("hidden");
    document.getElementById("classification").innerHTML =
        "<strong>Kategori:</strong> " + random.label;

    document.getElementById("education").innerHTML =
        "<strong>Edukasi Sosial:</strong> " + random.edu;
}
