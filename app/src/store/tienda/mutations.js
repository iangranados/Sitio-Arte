export function TIENDA_LOAD_REQUEST (state) {
	state.loading = true
	state.error = null
}

export function TIENDA_LOAD_SUCCESS (state, payload) {
	state.offers = payload
	state.loading = false
	state.error = null
}

export function TIENDA_LOAD_ERROR (state, payload) {{
	state.loading = false
	state.error = payload
}}
