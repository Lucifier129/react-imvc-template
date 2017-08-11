/**
 * 数据层 model
 */

// 初始化状态
export const initialState = {
  count: 0, // 计数
  num: 1 // 每次增加的幅度
}

// 修改状态的 action 函数
export function INCREMENT (state, num = 1) {
  // 返回新状态，才会触发更新
  return {
    ...state,
    count: state.count + num
  }
}
