<template>
  <p class="title">Jim's To-Do List</p>
  <div class="container">
    <div class="content">
      <div class="Input-area">
        <input
          style="padding: 5px; margin-top: 5px"
          type="text"
          placeholder="Enter Event"
          v-model="input_data"
        />
        <button
          type="button"
          style="margin-left: 5px"
          class="btn btn-warning"
          v-on:click="add_todo"
        >
          Submmit
        </button>
      </div>
      <div class="Todo-area">
        <p style="font-weight: bold">TODO</p>
        <ul style="padding: 0; margin: 0">
          <li class="listitem" v-for="(item, index) in lists" :key="index">
            <div class="wait">
              {{ item.value }}
              <div>
                <img
                  class="Icon"
                  v-on:click="finish_todo(index)"
                  src="https://img.icons8.com/fluency/48/000000/checkmark.png"
                />
                <img
                  class="Icon"
                  v-on:click="delete_todo(index)"
                  src="https://img.icons8.com/emoji/48/000000/cross-mark-emoji.png"
                />
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div class="Complete-area">
        <p style="font-weight: bold">COMPLETE</p>
        <ul style="padding: 0; margin: 0">
          <li
            class="listitem"
            v-for="(item, index) in finish_lists"
            :key="index"
          >
            <div class="finish">
              {{ item.value }}
              <div>
                <img
                  class="Icon"
                  v-on:click="delete_finish_todo(index)"
                  src="https://img.icons8.com/emoji/48/000000/cross-mark-emoji.png"
                />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isshow: true,
      id: "",
      input_data: "",
      input: "hello word123",
      count: 0,
      finish_count: 0,
      lists: [],
      finish_lists: [],
      time: "",
    };
  },
  methods: {
    delete_todo(id) {
      this.lists.splice(id, 1);
    },
    add_todo() {
      var data = this.input_data;
      this.lists.push({ id: this.count, timestamp: this.time, value: data });
      this.count++;
      this.input_data = "";
    },
    finish_todo(id) {
      var finishdata = this.lists[id].value;
      this.finish_lists.push({ id: this.finish_count, value: finishdata });
      this.finish_count++;
      this.lists.splice(id, 1);
    },
    delete_finish_todo(id) {
      this.finish_lists.splice(id, 1);
    },
  },
};
</script>

<style>
.title {
  height: 70px;
  width: 100vw;
  background-color: #f4a261;
  color: #2b2b2b;
  font-size: 40px;
}
.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100pw;
}
.content {
  height: 500px;
  width: 500px;
  border: solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 7px;
}
.Complete-area,
.Todo-area {
  margin-top: 15px;
  height: 200px;
  width: 400px;
  border: solid #f4a261;
  border-radius: 10px;
}
.wait,
.finish {
  margin-top: 5px;
  height: 25px;
  width: 100%;
  background-color: inherit;
  border: 2px solid #e9c46a;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.Icon {
  cursor: pointer;
  height: 100%;
  margin-bottom: 2px;
}
.listitem {
  padding: 0;
  margin: 0;
  width: 100%;
  list-style-type: none;
}
</style>