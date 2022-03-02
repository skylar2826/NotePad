<template>
  <ul>
    <TaskItem v-for="task in taskList" :key="task.id" :task="task" />
  </ul>
</template>

<script>
import TaskItem from "./task-item.vue";

export default {
  name: "TaskList",
  components: {
    TaskItem,
  },
  props: {
    taskList: {
      type: Array,
      default: () => ([])
    }
  }
};
</script>

<style lang="less" scoped></style>
