/* eslint-disable space-before-function-paren */
/* eslint-disable quotes */
/* eslint-disable semi */
import API_ENDPOINT from "../globals/api-endpoint";

class RestoSource {
  static async listResto() {
    const response = await fetch(API_ENDPOINT.RESTO);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailResto(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }
}

export default RestoSource;
