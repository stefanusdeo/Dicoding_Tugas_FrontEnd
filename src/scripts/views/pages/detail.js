/* eslint-disable quotes */
/* eslint-disable comma-dangle */
/* eslint-disable semi */
/* eslint-disable space-before-function-paren */
import UrlParser from "../../routes/url-parser";
import RestoSource from "../../data/resto-source";
import { createRestoDetailTemplate } from "../templates/template-view";
import LikeButtonInitiator from "../../utils/like-button-initiator";
import FavoriteRestoIdb from "../../data/favoriteresto-idb";
const Detail = {
  async render() {
    return `
          <div id="movie" class="movie" tabindex="0"></div>
          <div id="likeButtonContainer"></div>
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await RestoSource.detailResto(url.id);
    const restoContainer = document.querySelector("#movie");
    restoContainer.innerHTML = createRestoDetailTemplate(resto);
    // Fungsi ini akan dipanggil setelah render()

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector("#likeButtonContainer"),
      favoriteRestos: FavoriteRestoIdb,
      resto: {
        id: resto.id,
        name: resto.name,
        description: resto.description,
        img: resto.pictureId,
        rating: resto.rating,
      },
    });
  },
};

export default Detail;
