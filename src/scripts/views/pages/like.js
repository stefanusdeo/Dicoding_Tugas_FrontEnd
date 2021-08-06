/* eslint-disable quotes */
/* eslint-disable comma-dangle */
/* eslint-disable space-before-function-paren */
/* eslint-disable semi */
import FavoriteRestoIdb from "../../data/favoriteresto-idb";
import { createRestoItemTemplate, notfound } from "../templates/template-view";
const Like = {
  async render() {
    return `
    <div class="content" tabindex="0">
      <h2 class="content__heading">Your Liked Resto</h2>
      <div id="restos" class="movies">
 
      </div>
    </div>
 `;
  },

  async afterRender() {
    const restos = await FavoriteRestoIdb.getAllRestos();
    const restosContainer = document.querySelector("#restos");
    restosContainer.innerHTML += notfound();
    restos.forEach((resto) => {
      restosContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default Like;
