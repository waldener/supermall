import * as types from './mutation-types'

export default {
  [types.ADD_TO_CART](state,goods) {
    state.cartList.push(goods)
  },
  [types.INCREMENT_COUNT](state,index) {
    state.cartList[index].count += 1
  }
}