/* eslint-disable comma-dangle */
/* eslint-disable no-prototype-builtins */
/* eslint-disable space-before-function-paren */
/* eslint-disable no-undef */
/* eslint-disable eqeqeq */
/* eslint-disable semi */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
import { itActsAsFavoriteRestoModel } from "./contract/favoriteRestoContract";

let favoriteRestos = [];

const FavoriteRestoArray = {
  getResto(id) {
    if (!id) {
      return;
    }

    return favoriteRestos.find((resto) => resto.id === id);
  },

  getAllRestos() {
    return favoriteRestos;
  },

  putResto(resto) {
    if (!resto.hasOwnProperty("id")) {
      return;
    }

    // pastikan id ini belum ada dalam daftar favoriteMovies
    if (this.getResto(resto.id)) {
      return;
    }

    favoriteRestos.push(resto);
  },

  deleteResto(id) {
    // cara boros menghapus film dengan meng-copy film yang ada
    // kecuali film dengan id == id
    favoriteRestos = favoriteRestos.filter((resto) => resto.id !== id);
  },
};
