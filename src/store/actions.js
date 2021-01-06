import * as types from './mutation-types'

export default {
  addToCart({state,commit},info){
    return new Promise( resolve => {
      //查看该商品是否已经添加到cartList中
      const oldInfo = state.cartList.find(item => item.iid == info.iid)

      //如果oldInfo不为空，表示该商品已在购物车中，该商品的数量加一
      if(oldInfo){
        const index = state.cartList.indexOf(oldInfo)
        commit(types.INCREMENT_COUNT,index)
      }else {
        info.count = 1
        info.checked = true
        commit(types.ADD_TO_CART,info)
      }

      resolve()
    })
  }
}