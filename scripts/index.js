// @todo: Темплейт карточки
const cardTemplate = document.querySelector("#card-template").content;
// @todo: DOM узлы
const placesList = document.querySelector(".places__list");
// @todo: Функция создания карточки
function createCardElm(cardData, deleteCallBack) {
  const cardElm = cardTemplate.querySelector(".card").cloneNode(true);
  const imageElm = cardElm.querySelector(".card__image");
  const titleElm = cardElm.querySelector(".card__title");

  imageElm.src = cardData.link;
  imageElm.alt = cardData.name;
  titleElm.textContent = cardData.name;

  const deleteButton = cardElm.querySelector(".card__delete-button");
  deleteButton.addEventListener("click", () => {
    deleteCallBack(cardElm);
  });
  return cardElm;
}
// @todo: Функция удаления карточки
function deleteCard(cardElm) {
  cardElm.remove();
}
// @todo: Вывести карточки на страницу
initialCards.forEach((cardData) => {
  placesList.append(createCardElm(cardData, deleteCard));
});
