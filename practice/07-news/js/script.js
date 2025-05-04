import { newsData } from "../data/news.js";

const loadData = () => {
  // Iterate all the items and send them createNewsCard function in every iteration to create a card:
  newsData.forEach((item) => {
    createNewsCard(item);
  });
};

const createNewsCard = (item) => {
  const newsContainer = document.getElementById("news");

  // Create a card
  const colDiv = document.createElement("div");
  colDiv.classList.add("col");

  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card", "h-100");
  cardDiv.setAttribute("data-id", item.id);

  // Create card content
  const img = document.createElement("img");
  img.src = item.image;
  img.alt = item.title;
  img.classList.add("card-img-top");

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const cardTitle = document.createElement("h5");
  cardTitle.classList.add("card-title");
  cardTitle.textContent = item.title;

  const like = createLikes(item.like);
  const likeTitle = document.createElement("h5");
  likeTitle.classList.add("card-title", "text-danger");
  likeTitle.innerHTML = like;

  const cardText = document.createElement("p");
  cardText.classList.add("card-text");
  cardText.textContent = item.description;

  // Appending
  cardBody.append(cardTitle, likeTitle, cardText);

  cardDiv.append(img, cardBody);

  colDiv.appendChild(cardDiv);

  newsContainer.appendChild(colDiv);
};

const createLikes = (score, likeLimit = 5) => {
  let likeHearts = "";
  for (let i = 0; i < likeLimit; i++) {
    const likeIcon = document.createElement("i");
    likeIcon.classList.add("me-1");

    if (i < score) {
      likeIcon.classList.add("fa-solid", "fa-heart");
    } else {
      likeIcon.classList.add("fa-regular", "fa-heart");
    }

    likeHearts += likeIcon.outerHTML;
  }
  return likeHearts;
};

const createNewsDetails = (news) => {
  const newsDetailsContainer = document.createElement("div");
  newsDetailsContainer.classList.add("row");

  const colImg = document.createElement("div");
  colImg.classList.add("col");

  const img = document.createElement("img");
  img.src = news.image;
  img.alt = news.title;
  img.classList.add("card-img-top");

  const colText = document.createElement("div");
  colText.classList.add("col");

  const title = document.createElement("h3");
  title.textContent = news.title;

  const like = createLikes(news.like);
  const likeSpan = document.createElement("span");
  likeSpan.innerHTML = like;

  const description = document.createElement("h5");
  description.textContent = news.description;

  const content = document.createElement("p");
  content.textContent = news.content;

  // Appending:
  colImg.appendChild(img);

  colText.append(title, likeSpan, description, content);

  newsDetailsContainer.append(colImg, colText);

  return newsDetailsContainer;
};

// Showing details of the news whenever clicked:
document.querySelector("#news").addEventListener("click", (e) => {
  let newsId = e.target.closest(".card").getAttribute("data-id");
  console.log(newsId);
  let filteredNews = newsData.find((item) => item.id === Number(newsId));

  let newsDetails = createNewsDetails(filteredNews);
  const newsDetailsContainer = document.getElementById("newsDetails");
  newsDetailsContainer.classList.add("border");

  // Remove prev content and add new one:
  newsDetailsContainer.innerHTML = "";
  newsDetailsContainer.appendChild(newsDetails);

  window.scrollTo(0, 0);
});

loadData();
