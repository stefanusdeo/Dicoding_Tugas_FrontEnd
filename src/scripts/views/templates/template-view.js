/* eslint-disable no-unused-vars */
/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/* eslint-disable semi */
import CONFIG from "../../globals/config";

const createRestoDetailTemplate = (resto) => {
  let restaurantCategories = "";
  let restaurantFoods = "";
  let restaurantDrinks = "";
  let restaurantReviews = "";

  resto.categories.forEach((category) => {
    restaurantCategories += category.name;
  });

  resto.menus.foods.forEach((food) => {
    restaurantFoods += food.name + ", ";
  });

  resto.menus.drinks.forEach((drink) => {
    restaurantDrinks += drink.name + ", ";
  });

  resto.customerReviews.forEach((review) => {
    restaurantReviews += `
    <div class="post-item">
      <div tabindex="0" class="post-item-content">
        <div>
          <h6 tabindex="0"> ${review.name} <span tabindex="0"> ${review.date} </span></h6>
          <p tabindex="0">${review.review}</p>
        </div>
      </div>
    </div>`;
  });

  return `
      <h2 class="movie__title">${resto.name}</h2>
      <img class="movie__poster lazyload" src="${
        CONFIG.BASE_IMAGE_URL + resto.pictureId
      }" alt="${resto.name}" />
      <div class="movie__info">
      <h3>Information</h3>
        <span tabindex="0"> ${restaurantCategories} </span>
        <h4>Alamat</h4>
        <p>${resto.address}</p>
        <h4>Kota</h4>
        <p>${resto.city}</p>
        <h4>Rating</h4>
        <p>${resto.rating}</p>
      </div>
      <div class="posts-review">
        <h4>Restorant Food</h4>
        <p tabindex="0" class="post-item-description">
          ${restaurantFoods}
        </p>
        <h4>Restorant Drink</h4>
        <p tabindex="0" class="post-item-description">
          ${restaurantDrinks}
        </p>
        <br>
        <hr>
        <br>
        <div class="movie__overview">
          <h3>Deskripsi</h3>
          <p>${resto.description}</p>
        </div>
        <br>
        <hr>
        <br>
        <div class="post-user-review">
          ${restaurantReviews}
        </div>
      </div>
    `;
};

const createRestoItemTemplate = (resto) => `
      <div class="movie-item">
        <div class="movie-item__header">
            <img class="movie-item__header__poster lazyload" alt="${resto.name}"
                data-src="${
                  resto.img
                    ? CONFIG.BASE_IMAGE_URL + resto.img
                    : CONFIG.BASE_IMAGE_URL + resto.pictureId
                }">
            <div class="movie-item__header__rating">
                <p>⭐️<span class="movie-item__header__rating__score">${
                  resto.rating
                }</span></p>
            </div>
        </div>
        <div class="movie-item__content">
            <h3 class="title-tombol"><a href="${`/#/detail/${resto.id}`}">${
  resto.name
}</a></h3>
            <p>${resto.description}</p>
        </div>
      </div>
      `;

const createLikeButtonTemplate = () => `
      <button aria-label="like this resto" id="likeButton" class="like">
         <i class="fa fa-heart-o" aria-hidden="true"></i>
      </button>
    `;

const createLikedButtonTemplate = () => `
      <button aria-label="unlike this resto" id="likeButton" class="like">
        <i class="fa fa-heart" aria-hidden="true"></i>
      </button>
    `;

const notfound = () => `
      <div class="resto-item__not__found"><p></p></div>
      `;
export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  notfound,
};
