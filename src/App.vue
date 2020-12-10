<template>
  <div id="app">
    <h3>投放问卷数据</h3>
    <listFirst/>
    <listSecond/>
    </div>
</template>
<script>
import listFirst from '@/components/listFirst'
import listSecond from '@/components/listSecond'
export default {
  name: 'index',
  components: {
    listFirst,
    listSecond
  }
}
</script>
<style>

</style>
