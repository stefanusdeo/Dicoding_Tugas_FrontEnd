/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/* eslint-disable semi */
import Resto from "../views/pages/resto";
import Detail from "../views/pages/detail";
import Like from "../views/pages/like";

const routes = {
  "/": Resto, // default page
  "/resto": Resto,
  "/detail/:id": Detail,
  "/like": Like,
};

export default routes;
