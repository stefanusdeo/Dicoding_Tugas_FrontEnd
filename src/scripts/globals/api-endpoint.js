/* eslint-disable comma-dangle */
/* eslint-disable semi */
/* eslint-disable quotes */
import CONFIG from "./config";

const API_ENDPOINT = {
  RESTO: `${CONFIG.BASE_URL}/list`,
  DETAIL: (id) => `${CONFIG.BASE_URL}/detail/${id}`,
  IMAGE: `${CONFIG.BASE_IMAGE_URL}`,
};

export default API_ENDPOINT;
