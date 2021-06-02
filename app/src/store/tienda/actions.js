import { axiosInstance } from 'boot/axios';

export function loadTienda ({ commit, dispatch}) {
	commit('TIENDA_LOAD_REQUEST')
	return axiosInstance.get("/tienda")
      .then((response) => {
        if (response.status === 200 && Array.isArray(response.data)) {
          commit('TIENDA_LOAD_SUCCESS', response.data);
        } else {
          throw new Error("Something went wrong, try again later.")
        }
      })
      .catch((e) => {
        commit('TIENDA_LOAD_ERROR', e)
      });
}
