<!--
 * @Author: miroku.yang
 * @Date: 2024-06-28 15:07:09
 * @LastEditors: Please set LastEditors
 * @Description: 
-->
<script setup lang="ts">
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";
onLaunch(() => {
  console.log("App Launch");
});
onShow(() => {
  console.log("App Show");
});
onHide(() => {
  console.log("App Hide");
});
</script>
<style lang="scss"></style>
