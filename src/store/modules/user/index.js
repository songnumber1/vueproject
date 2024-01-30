import state from '@/store/modules/user/state.js'
import getters from '@/store/modules/user/getters.js'
import mutations from '@/store/modules/user/mutations.js'
import actions from '@/store/modules/user/actions.js'

export default {
	namespaced: true,
	state,
	getters,
	mutations,
	actions
}
