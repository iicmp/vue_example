<template>
  <div id="app">
    <a-select style="width: 500px" @change="selectChange" show-search :show-arrow="false" :open="true" mode="multiple" option-label-prop="label">
      <a-select-option key="title" disabled>
        <span class="label">label</span>
        <span class="count">count</span>
      </a-select-option>
      <a-select-option v-for="(item, index) in data" :key="index" :value="item.key" :label="item.label">
        <span class="label">{{item.label}}</span>
        <span class="count">{{item.count}}</span>
      </a-select-option>
    </a-select>
    <p class="text">已选{{value.length}}行</p>
  </div>

</template>

<script>
export default {
  data () {
    return {
      rowSelection: {},
      data: [
        {
          key: 1111,
          label: 'label11',
          count: 3
        },
        {
          key: 2222,
          label: 'label12',
          count: 3
        },
        {
          key: 3333,
          label: 'label17',
          count: 3
        },{
          key: 4444,
          label: 'label4',
          count: 3
        },
        {
          key: 5555,
          label: 'label5',
          count: 3
        },
        {
          key: 6,
          label: 'label6',
          count: 3
        },
        {
          key: 745,
          label: 'label7',
          count: 3
        },
        {
          key: 8,
          label: 'label9',
          count: 3
        },
        {
          key: 9,
          label: 'label8',
          count: 3
        }
      ],
      value: []
    }
  },
  methods: {
    selectChange (e) {
      console.log(e)
      this.value = e
    }
  }
}
</script>

<style lang="scss">
.label{
  position: absolute;
  left: 40px;
}
.count{
  float: right;
}
.ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item .ant-select-selected-icon{
  position: static!important;
  float: left;
  margin-top: 15px;
}
.text{
  position: absolute;
  top: 300px;
}
</style>
