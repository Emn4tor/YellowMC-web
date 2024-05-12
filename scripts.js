const copyIPBtn = document.getElementById("copyIPBtn");

copyIPBtn.addEventListener("click", function() {
    const ipAddress = "192.168.1.10"; // Ersetze dies durch deine Server-IP
    navigator.clipboard.writeText(ipAddress);
    alert("IP-Adresse in die Zwischenablage kopiert!");
});
