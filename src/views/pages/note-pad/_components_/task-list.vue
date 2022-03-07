<template>
  <ul>
    <transition-group name="task">
      <TaskItem v-for="task in taskList" :key="task.id" :task="task" />
    </transition-group>
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

<style lang="less" scoped>
@keyframes fadeIn {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}

.task-enter-active {
  animation: fadeIn .5s linear;
}

.task-leave-active {
  animation: fadeIn .5s linear reverse;
}
</style>
