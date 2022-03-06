<template>
  <div id="app">
    <!-- 记事本工具：记录待办工作与完成操作 -->
    <NotePad />
  </div>
</template>

<script>
import NotePad from './views/pages/note-pad';

export default {
  name: 'App',
  components: {
    NotePad
  }
}
</script>

<style>
</style>
