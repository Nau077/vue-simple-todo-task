<template lang="pug">
	section.tasks
		TaskList(
			:canChange='canChange'
		)
</template>

<script>
import TaskList from "@/components/page-modules/TaskList";
export default {
  name: "Tasks",
  components: {
    TaskList
  },
  data() {
    return {
      canChange: false
    };
  }
};
</script>
<style scoped>
p {
  margin-right: 10px;
}
</style>
