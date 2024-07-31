问题记录：
1. Syntax Error: SassError: semicolons aren't allowed in the indented syntax.（语法错误：SassError：缩进语法中不允许使用分号。）
解决方式：将lang='scss' 改成 type='text/scss'  或者在 App 入口文件的style 标签上定义：<style lang="scss"></style>

2. 开发轮播组件XtxSwiper 时提示ReferenceError: defineProps is not defined
解决方式：从vue 中导入defineProps 或者查看eslintrc 的配置是否正确【extends】 ,其次就是<script setup lang="ts"> 组件一定要定义setup