const resourceList = document.getElementById("resource-list");
const buttons = document.querySelectorAll("nav button");

// Funksjon for å vise ressurser
function displayResources(category) {
    resourceList.innerHTML = ""; // Fjern eksisterende innhold
    const filteredResources = resources.filter(res => res.category === category);
    filteredResources.forEach(res => {
        const section = document.createElement("section");
        section.innerHTML = `
            <h2>${res.category}</h2>
            <p>${res.text}</p>
            <ul>
                ${res.sources.map(source => `<li><a href="${source.url}" target="_blank">${source.title}</a></li>`).join("")}
            </ul>
        `;
        resourceList.appendChild(section);
    });
}
// Håndter navigasjon
buttons.forEach(button => {
    button.addEventListener("click", () => displayResources(button.dataset.category));
});

// Vis kun HTML-ressurser ved første lasting
displayResources("HTML");