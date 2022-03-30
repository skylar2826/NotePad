<template>
  <div class="taskPad">
    <Header />
    <TaskList :taskList="taskList" />
    <Footer />
  </div>
</template>

<script>
import Header from "../../components/header";
import TaskList from "../../components/task-list.vue";
import Footer from "../../components/footer.vue";
import { TaskList as TaskListClass } from "../../../services/note-pad";

export default {
  name: "NotePad",
  components: {
    Header,
    TaskList,
    Footer,
  },
  provide() {
    return {
      isExistTask: this.isExistTask,
      addTask: this.addTask,
      deleteTask: this.deleteTask,
      selectAllTask: this.selectAllTask,
      getTaskTotal: this.getTaskTotal,
      getDoneTaskTotal: this.getDoneTaskTotal,
      clearTaskDoneList: this.clearTaskDoneList,
      editTask: this.editTask,
    };
  },
  data() {
    return {
      taskList: [],
      taskListInstance: {},
    };
  },
  methods: {
    isExistTask(taskName) {
      return this.taskListInstance.isExistTask(taskName);
    },
    addTask(taskName) {
      this.taskListInstance.addTask(taskName);
    },
    deleteTask(id) {
      this.taskListInstance.deleteTask(id);
    },
    selectAllTask(isSelected) {
      this.taskListInstance.selectAllTask(isSelected);
    },
    clearTaskDoneList() {
      this.taskListInstance.clearTaskDoneList();
      this.getTaskList();
    },
    getDoneTaskTotal() {
      return this.taskListInstance.getDoneTaskTotal();
    },
    getTaskTotal() {
      return this.taskListInstance.getTaskTotal();
    },
    getTaskList() {
      this.taskList = this.taskListInstance.getTaskList();
    },
    editTask(id, name) {
      this.taskListInstance.editTask(id, name);
      this.getTaskList();
    }
  },
  created() {
    this.taskListInstance = new TaskListClass();
    this.getTaskList();
  },
};
</script>

<style lang="less">
.taskPad {
  width: 400px;

  .error {
    color: red;
  }

  .info {
    color: blue;
  }
}
</style>
