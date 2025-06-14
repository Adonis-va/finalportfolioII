document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add("loaded");
    }, index * 200); // Delay each card slightly for a staggered effect
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const exploreData = JSON.parse(document.getElementById("exploreData").textContent);
  const collectionContainer = document.getElementById("exploreCollection");

  exploreData.forEach(item => {
    const card = document.createElement("div");
    card.className = "collectionCard";

    const title = document.createElement("h5");
    title.textContent = item.title;

    const link = document.createElement("a");
    link.href = item.url;
    link.textContent = "View Project";
    link.target = "_blank";

    card.appendChild(title);
    card.appendChild(link);

    collectionContainer.appendChild(card);
  });
});

