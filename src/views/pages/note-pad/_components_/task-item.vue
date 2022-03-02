<template>
    <li class="task">
      <div class="task-show">
        <input type="checkbox" v-model="task.done" />
        {{ task.name }}
      </div>
      <div class="error task-delete" @click="deleteTaskItem(task)">删除</div>
    </li>
</template>

<script>
export default {
  name: 'TaskItem',
  inject: ['deleteTask'],
  props: {
    task: {
      type: Object,
      require: true
    }
  },
  methods: {
    deleteTaskItem(task) {
      if (confirm(`确认删除任务：${task.name}?`)) {
        this.deleteTask(task.id);
      }
    }
  }
}
</script>

<style lang="less" scoped>
.task {
    display: flex;
    width: 100%;

    .task-show {
      min-width: 200px;
    }

    .task-delete {
      cursor: pointer;
    }
  }
</style>