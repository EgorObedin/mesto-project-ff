// @todo: Темплейт карточки
const cardTemplate = document.querySelector("#card-template").content;
// @todo: DOM узлы
const placesList = document.querySelector(".places__list");
// @todo: Функция создания карточки
function createCardElm(cardData, deleteCallBack) {
  const cardElm = cardTemplate.querySelector(".card").cloneNode(true);
  const ImageElm = cardElm.querySelector(".card__image");
  const TitleElm = cardElm.querySelector(".card__title");

  ImageElm.src = cardData.link;
  ImageElm.alt = cardData.name;
  TitleElm.textContent = cardData.name;

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
