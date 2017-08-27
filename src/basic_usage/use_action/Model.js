/**
 * Model of IMVC
 * 除了 initialState 属性外，其余的属性都应该是 action 函数
 * DOC： https://github.com/Lucifier129/relite
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