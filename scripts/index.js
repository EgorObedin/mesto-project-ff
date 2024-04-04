// @todo: Темплейт карточки
const cardTemplate = document.querySelector("#card-template").content;
// @todo: DOM узлы
const placeslist = document.querySelector(".places__list");
// @todo: Функция создания карточки
function createCardElm(cardData, deleteCallBack) {
  const CardElm = cardTemplate.querySelector(".card").cloneNode(true);
  const ImageElm = CardElm.querySelector(".card__image");
  const TitleElm = CardElm.querySelector(".card__title");

  ImageElm.src = cardData.link;
  ImageElm.alt = cardData.name;
  TitleElm.textContent = cardData.name;

  const deleteButton = CardElm.querySelector(".card__delete-button");
  deleteButton.addEventListener("click", () => {
    deleteCallBack(CardElm);
  });
  return CardElm;
}
// @todo: Функция удаления карточки
function deleteCard(CardElm) {
  CardElm.remove();
}
// @todo: Вывести карточки на страницу
initialCards.forEach((cardData) => {
  placeslist.append(createCardElm(cardData, deleteCard));
});
