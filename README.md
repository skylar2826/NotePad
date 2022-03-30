# demo练习

## demo1:NotePad

### 需求

#### 需求点

1. input输入任务，回车表单创建任务
   1. 输入空格，不会创建任务
   2. 不可输入同名任务，输入同名任务有警告
   3. 每次创建完成后清空input, 输入错误时，不清空

2. 单条任务
   1. 单条任务可删除，删除有删除提醒
   2. 单条任务可勾选，标记为已完成

3. 底部有总任务与完成任务个数统计

4. 任务可全选，全选按钮与任务list联动

5. 可进行完成任务清空操作

## 改进

### 架构变化

1. 分层：视图与业务逻辑拆开
2. 视图部分分组件

#### 数据存储方式变化

1.  2份维护数据taskList、taskDoneList => 1份维护数据taskList
2. 数据由services层存储，注入notePad根组件，由根组件调度，将数据和方法传给相应子组件
3. provide统一提供所有子孙组件需要方法，子孙组件按需引入

### 待办

1. 单测
2. ts 维护数据 // 重构1（当前已学习，ts练习见snake-ts）
3. vue3 实现 // 重构2 (当前已学习， vue3练习见秦山核电扩展程序app-qshd-base)

### 功能演示

见public/demo.mp4
