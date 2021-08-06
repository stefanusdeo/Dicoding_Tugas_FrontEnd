/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable no-undef */
/* eslint-disable quotes */
import { itActsAsFavoriteRestoModel } from "./contract/favoriteRestoContract";
import FavoriteRestoIdb from "../src/scripts/data/favoriteresto-idb";

describe("Favorite resto Idb Contract Test Implementation", () => {
  afterEach(async () => {
    (await FavoriteRestoIdb.getAllRestos()).forEach(async (resto) => {
      await FavoriteRestoIdb.deleteResto(resto.id);
    });
  });

  itActsAsFavoriteRestoModel(FavoriteRestoIdb);
});
