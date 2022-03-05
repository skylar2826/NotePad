<template>
    <li class="task">
      <div class="task-show">
        <input type="checkbox" v-model="task.done" />
        <input 
          ref="task_name" 
          v-model="task.name"
          v-show="task.isEdit"
          @blur="editedTaskItem(task, $event)" 
        />
        <span v-show="!task.isEdit">{{task.name}}</span>
      </div>
      <div class="operation">
        <span v-show="!task.isEdit" class="info" @click="editTaskItem(task)">编辑</span>
        <span class="error" @click="deleteTaskItem(task)">删除</span>
      </div>
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
  methods: {
    deleteTaskItem(task) {
      if (confirm(`确认删除任务：${task.name}?`)) {
        this.deleteTask(task.id);
      }
    },
    editTaskItem(task) {
      if (task.hasOwnProperty('isEdit')) {
        task.isEdit = true;
      } else {
        this.$set(task, 'isEdit', true);
      }
      
      this.$nextTick(function() {
        this.$refs.task_name.focus();
      })
    },
    editedTaskItem(task, e) {
      task.isEdit = false;
      if (e.target.value.trim()) return;
      this.editTask(id, e.target.value);
    }
  }
}
</script>

<style lang="less" scoped>
.task {
    display: flex;
    width: 100%;
    justify-content: space-between;

    .operation {
      cursor: pointer;

      > *:not(:last-child) {
        margin-right: 8px;
      }
    }

    .task-show {
      min-width: 200px;
    }
  }
</style>