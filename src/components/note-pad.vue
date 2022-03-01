<template>
  <div class="taskPad">
		<div>
			<input
				placeholder="请输入任务，完成时回车"
				v-model="task"
				@keyup.enter="createTask"
			/><br />
			<span v-show="visibleMessage" class="error">不可创建相同任务</span>
		</div>
    <ul>
      <li class="taskList" v-for="task in taskList" :key="task">
        <div class="taskItem">
          <input type="checkbox" v-model="taskDoneList" :value="task" />
          {{ task }}
        </div>
        <div class="error task-delete" @click="deleteTask(task)">删除</div>
      </li>
    </ul>
    <div class="footer">
			<div>
				<input type="checkbox" v-model="selectAll" />
				<span>&nbsp;&nbsp;完成情况：{{ taskDoneList.length }} / {{ taskList.length }}</span>
			</div>
      <button @click="clearTaskDoneList">清空完成任务</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotePad",
  data() {
    return {
      task: "",
			visibleMessage: false,
      taskList: [],
      taskDoneList: [],
			s: ''
    };
  },
	computed: {
		selectAll: {
			set(selected) {
				this.taskDoneList = selected ? this.taskList : []; 
				return selected
			},
			get() {
				return this.taskList.length && this.taskDoneList.length === this.taskList.length;
			}
		},
	},
  methods: {
    createTask() {
			if(!this.task.trim()) {
				this.visibleMessage = false;
				return;
			}

			if(this.taskList.includes(this.task)) {
				this.visibleMessage = true;
				return;
			}

      this.taskList.unshift(this.task);
			this.resetTask();
    },
    deleteTask(task) {
			if (confirm(`确认删除任务：${task}?`)) {
				const taskIdx = this.taskList.indexOf(task);
				this.taskList.splice(taskIdx, 1);

				const taskDoneIdx = this.taskDoneList.indexOf(task);
				if(taskDoneIdx > -1) {
					this.taskDoneList.splice(taskDoneIdx, 1);
				}
			}
    },
		clearTaskDoneList() {
			this.taskList = this.taskList.filter(task => {
				return !this.taskDoneList.includes(task);
			});
			this.taskDoneList = [];
		},
		resetTask() {
			this.visibleMessage = false;
			this.task = '';
		},
  },
  mounted() {},
};
</script>

<style lang="less" scoped>
.taskPad {
	width: 400px;

	.error {
		color: red;
	}

	.taskList {
		display: flex;
		width: 100%;

		.taskItem {
			min-width: 200px;
		}

		.task-delete {
			cursor: pointer;
		}
	}

	.footer {
		display: flex;
		width: 100%;
		justify-content: space-between;
	}
}
</style>
