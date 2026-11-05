
const malwareFamilies = [
    {
        name: "Emotet",
        type: "Banking Trojan",
        description: "A malware family originally known as a banking trojan, later used to distribute other malware."
    },
    {
        name: "WannaCry",
        type: "Ransomware",
        description: "Ransomware that spread rapidly in 2017 by exploiting a Windows SMB vulnerability."
    },
    {
        name: "QakBot",
        type: "Banking Trojan",
        description: "A malware family associated with credential theft and malware distribution."
    },
    {
        name: "Mirai",
        type: "Botnet",
        description: "Malware that infects IoT devices and uses them to conduct distributed denial-of-service attacks."
    }
];

const malwareList = document.getElementById("malwareList");
const searchInput = document.getElementById("searchInput");
console.log("Search input:", searchInput);
console.log("Malware list:", malwareList);

function displayMalware(families) {

    malwareList.innerHTML = "";

    if (families.length === 0) {
        malwareList.innerHTML =
            '<p class="no-results">No malware found.</p>';
        return;
    }

    families.forEach(malware => {

        const card = document.createElement("article");
        card.className = "malware-card";

        const title = document.createElement("h3");

            if (
            malware.name === "Emotet" ||
            malware.name === "WannaCry" ||
            malware.name === "QakBot" ||
            malware.name === "Mirai"
            ) {
            
                const link = document.createElement("a");

            if (malware.name === "Emotet") {
                link.href = "emotet.html";
        }   else if (malware.name === "WannaCry") {
                link.href = "wannacry.html";
            }       
            else if (malware.name === "QakBot") {
                link.href = "qakbot.html";
            } 
            else {
                link.href = "mirai.html";
            }

            link.textContent = malware.name;
            title.appendChild(link);

        } else {
            title.textContent = malware.name;
        }

        const type = document.createElement("p");
        type.textContent = "Type: " + malware.type;

        const description = document.createElement("p");
        description.textContent = malware.description;

        card.appendChild(title);
        card.appendChild(type);
        card.appendChild(description);

        malwareList.appendChild(card);
    });
}

searchInput.addEventListener("input", function () {

    const searchTerm = searchInput.value.toLowerCase();

    const filteredFamilies = malwareFamilies.filter(malware =>
    malware.name.toLowerCase().includes(searchTerm) ||
    malware.type.toLowerCase().includes(searchTerm) ||
    malware.description.toLowerCase().includes(searchTerm)
    );

    displayMalware(filteredFamilies);
});

displayMalware(malwareFamilies);
