<template>
  <div>
    <vue-filter-control @filter-changed="refreshData" :columns="columns" :active-filters="myFilters"
      :opt-groups="optGroups">
    </vue-filter-control>
  </div>


</template>
<script>

export default{

  name:'worK'
}



var Vue = require('vue');
import VueFilterControl from 'vue-filter-control'
Vue.component('vue-filter-control', VueFilterControl)

var vm = new vm({
  el: '#some-div-id',
  data: {
    columns: [
      {
        name: 'first_name',
        displayName: 'First Name',
        dataType: 'string'
      }, {
        name: 'languages_spoken',
        displayName: 'Languages Spoken Fluently',
        dataType: 'choice',
        options: [
          { key: 'en', value: 'English' },
          { key: 'fr', value: 'French' },
          { key: 'pt', value: 'Portuguese' },
          { key: 'es', value: 'Spanish' }
          // ...more languages
        ],
        maxItems: 10,
        optGroup: 'group1'
      }
    ],
    myFilters: [
      { column: 'first_name', operator: '=', value: 'Frank' },
      { column: 'languages_spoken', operator: 'in', value: 'en,fr' }
    ],
    optGroups: [
      { value: 'group1', label: 'Group One' },
      { value: 'group2', label: 'Group Two' }
    ]
  },

  methods: {

    refreshData(activeFilters) {
     
    }
  }
});
























</script>