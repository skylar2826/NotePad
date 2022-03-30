<template>
  <div>
    <input
      placeholder="请输入任务，完成时回车"
      v-model="task"
      @keyup.enter="createTask"
    /><br />
    <span v-show="visibleMessage" class="error">不可创建相同任务</span>
  </div>
</template>

<script>
export default {
  name: "Header",
  inject: ["isExistTask", "addTask"],
  data() {
    return {
      task: "",
      visibleMessage: false,
    };
  },
  methods: {
    createTask() {
      if (!this.task.trim()) {
        this.visibleMessage = false;
        return;
      }

      if (this.isExistTask(this.task)) {
        this.visibleMessage = true;
        return;
      }

      this.addTask(this.task);
      this.reset();
    },
    reset() {
      this.visibleMessage = false;
      this.task = "";
    },
  },
};
</script>

<style lang="less" scoped></style>
