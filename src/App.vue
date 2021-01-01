<template>

  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/> -->

  <div class="main-wrapper" ref="main-wrapper">
      <my-dashboard></my-dashboard>
      <my-data-table></my-data-table>
  </div>
  
</template>

<script>
import DataTable from '@/components/DataTable.vue'
import Dashboard from '@/components/Dashboard.vue'
import { mapGetters } from 'vuex'


export default {
  name: 'App',
  components: {
    'my-data-table': DataTable,
    'my-dashboard': Dashboard,
  },
  data() {
    return {


    }
  },
   computed: {
    ...mapGetters([
      'showModal',
      'showFired',
      'firedEmployees',
      'firedEmployeesCount',
      'currentEmployees',
      'currentEmployeesCount',
      'allEmployees',
    ])
  }
}
</script>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
