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


[
  { "title": "PayPal", "url": "https://www.paypal.com/us/home?tab=personal" },
  { "title": "MapCrunch", "url": "https://www.mapcrunch.com/" },
  { "title": "Breakfast", "url": "https://wearebreakfast.com/" },
  { "title": "Little Alchemy", "url": "https://littlealchemy2.com/" },
  { "title": "NCase", "url": "https://ncase.me/trust/" },
  { "title": "NicePage", "url": "https://nicepage.com/" },
  { "title": "Music Theory", "url": "https://www.musictheory.net/" },
  { "title": "Da Font", "url": "https://www.dafont.com/theme.php?cat=114" },
  { "title": "29a.ch", "url": "https://29a.ch/" }
]

