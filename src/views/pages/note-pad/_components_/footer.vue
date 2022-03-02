<template>
  <div class="footer" v-show="totalTaskNum">
    <div>
      <input type="checkbox" v-model="selectAll" />
      <span
        >&nbsp;&nbsp;完成情况：{{ doneTasksNum }} /
        {{ totalTaskNum }}</span
      >
    </div>
    <button @click="clearTaskDoneList">清空完成任务</button>
  </div>
</template>

<script>
export default {
  name: "Footer",
  inject: ['selectAllTask', 'getTaskTotal', 'getDoneTaskTotal', 'clearTaskDoneList'],
  computed: {
    totalTaskNum() {
      return this.getTaskTotal()
    },
    doneTasksNum() {
      return this.getDoneTaskTotal();
    },
    selectAll: {
      set(isSelected) {
        this.selectAllTask(isSelected);
      },
      get() {
        return this.totalTaskNum.length && this.doneTasksNum === this.totalTaskNum;
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
