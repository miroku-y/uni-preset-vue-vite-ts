/*
 * @Author: miroku.yang
 * @Date: 2024-07-07 13:25:08
 * @LastEditors: 
 * @Description: 
 */
import type { CategoryTopItem } from '@/types/category'
import { http } from '@/utils/http'

/**
 * 分类列表-小程序
 */
export const getCategoryTopAPI = () => {
  return http<CategoryTopItem[]>({
    method: 'GET',
    url: '/category/top',
  })
}
