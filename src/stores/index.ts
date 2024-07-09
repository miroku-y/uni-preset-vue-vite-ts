/*
 * @Author: miroku.yang
 * @Date: 2024-07-07 14:55:56
 * @LastEditors: 
 * @Description: 
 */
import { createPinia } from "pinia";
import persist from 'pinia-plugin-persistedstate'

const pinia = createPinia()
// 使用持久化存储
pinia.use(persist)

// 默认导出给main.ts 使用
export default pinia


export * from './modules/member'
