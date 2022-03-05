<template>
    <li class="task">
      <div class="task-show">
        <input type="checkbox" v-model="task.done" />
        <input class="noBorder" v-model="taskName" />
      </div>
      <div class="error operation" @click="deleteTaskItem(task)">删除</div>
    </li>
</template>

<script>
export default {
  name: 'TaskItem',
  inject: ['deleteTask', 'editTask'],
  props: {
    task: {
      type: Object,
      require: true
    }
  },
  computed: {
    taskName: {
      set(newName) {
        this.editTask(this.task.id, newName);
      },
      get() {
        return this.task.name;
      }
    }
  },
  methods: {
    deleteTaskItem(task) {
      if (confirm(`确认删除任务：${task.name}?`)) {
        this.deleteTask(task.id);
      }
    },
  }
}
</script>

<style lang="less" scoped>
.task {
    display: flex;
    width: 100%;

    .operation {
      cursor: pointer;
    }

    .noBorder {
      border: none;
    }

    .task-show {
      min-width: 200px;
    }
  }
</style>