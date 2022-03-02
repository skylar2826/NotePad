<template>
  <div class="footer">
    <div>
      <input type="checkbox" v-model="selectAll" />
      <span
        >&nbsp;&nbsp;完成情况：{{ getDoneTaskTotal() }} /
        {{ getTaskTotal() }}</span
      >
    </div>
    <button @click="clearTaskDoneList">清空完成任务</button>
  </div>
</template>

<script>
export default {
  name: "Footer",
  inject: ['selectAllTask', 'isSelectedAll', 'getTaskTotal', 'getDoneTaskTotal', 'clearTaskDoneList'],
  computed: {
    selectAll: {
      set(isSelected) {
        this.selectAllTask(isSelected);
      },
      get() {
        return this.isSelectedAll();
      }
    }
  },
};
</script>

<style lang="less" scoped>
.footer {
  display: flex;
  width: 100%;
  justify-content: space-between;
}
</style>
