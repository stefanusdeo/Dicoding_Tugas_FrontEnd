/* eslint-disable quotes */
/* eslint-disable semi */
/* eslint-disable comma-dangle */
/* eslint-disable space-before-function-paren */
import RestoSource from "../../data/resto-source";
import { createRestoItemTemplate } from "../templates/template-view";
const Resto = {
  async render() {
    return `
        <div class="content" tabindex="0">
          <h2 class="content__heading">List Resto</h2>
          <div id="resto" class="movies">
          
          </div>
        </div>
        `;
  },

  async afterRender() {
    const resto = await RestoSource.listResto();
    console.log(resto);
    const restoContainer = document.querySelector("#resto");
    resto.forEach((resto) => {
      restoContainer.innerHTML += createRestoItemTemplate(resto);
    });
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Resto;
