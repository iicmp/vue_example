<template>
  <div id="app">
    <input type="text" v-model="keyWord" @keyup="search">
    <a-table :row-selection="rowSelection" :columns="columns" :data-source="data">
    </a-table>
  </div>

</template>

<script>
export default {
  data () {
    return {
      rowSelection: {},
      data: [
        {
          label: 'label11',
          count: 3
        },
        {
          label: 'label12',
          count: 3
        },
        {
          label: 'label13',
          count: 3
        },{
          label: 'label4',
          count: 3
        },
        {
          label: 'label5',
          count: 3
        },
        {
          label: 'label6',
          count: 3
        },
        {
          label: 'label7',
          count: 3
        },
        {
          label: 'label9',
          count: 3
        },
        {
          label: 'label8',
          count: 3
        }
      ],
      keyWord: null,
      rowSelection: {
        onChange: (a, b) => { console.log('------------------------');console.log(a); console.log(b);console.log('------------------------');}
      }
    }
  },
  methods: {
    search () {
      
    }
  },
  computed: {
    columns () {
      const columns = [
        {
          title: 'label',
          dataIndex: 'label',
          filters: [
            { text: '1', value: '1' },
            { text: '2', value: '2' }
          ],
          filteredValue: this.keyWord ? [this.keyWord] : null,
          onFilter: (value, record) => record.label.includes(value),
        },
        {
          title: 'count',
          dataIndex: 'count',
        }
      ]
      return columns
    }
    
  }
}
</script>

<style lang="scss">

</style>
