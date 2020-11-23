import { GetterTree } from 'vuex'
import { UserState } from '@/interface'

const getters: GetterTree<UserState, any> = {
  token: state => state.token
}

export default getters
