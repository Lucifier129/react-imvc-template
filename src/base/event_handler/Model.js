/**
 * Model of IMVC
 */

 export const initialState = {
     count: 0
 }

 // 返回新的 state 才会触发 view 更新
 export const INCREMENT = state => {
     return {
         ...state,
         count: state.count + 1
     }
 }

 export const DECREMENT = state => {
    return {
        ...state,
        count: state.count - 1
    }
 }