/* eslint-disable quotes */
/* eslint-disable semi */
/* eslint-disable no-undef */
Feature("liking Resto");

Before(({ I }) => {
  I.amOnPage("/#/like");
});

// Scenario("test something", ({ I }) => {
//   I.seeElement("#restos");
//   I.seeElement(".resto-item__not__found");
// });

Scenario("liking one resto", ({ I }) => {
  I.seeElement(".resto-item__not__found");

  I.amOnPage("/");
  // … kita akan mengisi uji coba berikutnya …
  I.seeElement(".title-tombol a");
  I.click(locate(".title-tombol a").first());

  I.seeElement("#likeButton");
  I.click("#likeButton");

  I.amOnPage("/#/like");
  I.seeElement(".movie-item");
});

Scenario("unlike one resto", ({ I }) => {
  I.amOnPage("/");
  // … kita akan mengisi uji coba berikutnya …
  I.seeElement(".title-tombol a");
  I.click(locate(".title-tombol a").first());

  I.seeElement("#likeButton");
  I.click("#likeButton");

  I.amOnPage("/#/like");
  I.seeElement(".movie-item");

  I.amOnPage("/#/like");
  I.seeElement(".title-tombol a");
  I.click(locate(".title-tombol a").first());

  I.seeElement("#likeButton");
  I.click("#likeButton");
});
