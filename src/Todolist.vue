<template>
  <p class="title">Jim's To-Do List</p>
  <div class="container">
    <div class="content">
      <div class="Input-area">
        <input
          style="padding: 5px"
          type="text"
          placeholder="Enter Event"
          v-model="input_data"
        />
        <button
          style="margin-left: 10px"
          type="button"
          class="close"
          v-on:click="add_todo"
        >
          submmit
        </button>
      </div>
      <div class="Todo-area">
        <p style="font-weight: bold">Todo</p>
        <ul>
          <li class="listitem" v-for="(item, index) in lists" :key="index">
            <div class="wait">
              {{ item.value }}
              <div>
                <img
                  class="Icon"
                  v-on:click="finish_todo(index)"
                  src="https://img.icons8.com/dotty/50/000000/checked-2.png"
                />
                <img
                  class="Icon"
                  v-on:click="delete_todo(index)"
                  src="https://img.icons8.com/dotty/50/000000/delete-sign.png"
                />
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div class="Complete-area">
        <p style="font-weight: bold">Complete</p>
        <div class="finish">
          {{ input }}
          <div>
            <img
              class="Icon"
              src="https://img.icons8.com/dotty/50/000000/delete-sign.png"
              style="height: 100%"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: "",
      input_data: "",
      input: "hello word123",
      count: 0,
      finish_count: 0,
      lists: [],
      finish_lists: [],
    };
  },
  methods: {
    delete_todo(id) {
      // console.log(id);
      this.lists.splice(id, 1);
      alert("deleted");
    },
    add_todo() {
      var data = this.input_data;
      this.lists.push({ id: this.count, value: data });
      this.count++;
      this.input_data = "";
    },
    finish_todo(id) {
      var finishdata = this.lists[id].value;
      console.log(finishdata);
      this.finish_lists.push({ id: this.finish_count, value: finishdata });
      this.count++;
      console.log(this.finish_lists);
    },
  },
};
</script>

<style>
.title {
  height: 70px;
  width: 100vw;
  background-color: rgb(236, 201, 154);
  color: #696969;
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
}
.Complete-area,
.Todo-area {
  margin-top: 15px;
  height: 200px;
  width: 400px;
  border: solid rgba(247, 199, 137, 0.925);
}
.wait,
.finish {
  height: 25px;
  width: 100%;
  background-color: inherit;
  border: 2px solid #f7e439bd;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.Icon {
  cursor: pointer;
  height: 100%;
}
.listitem {
  list-style-type: none;
}
.close:hover,
.close:focus {
  box-shadow: inset -3.5em 0 0 0 var(--hover), inset 3.5em 0 0 0 var(--hover);
}
.close {
  color: #ff7f82;
}
</style>