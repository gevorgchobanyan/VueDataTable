<template>
    <nav class="navbar navbar-light bg-light">
        <h3>Employee List</h3> 
        <!-- <h3>Employee list {{selectedEmployeeCount}} {{orderState}}</h3>  -->
        <!-- <button type="button" @click="sendOrder">sendOrder</button> -->
        <div>
            <input class="form-control mr-sm-2" 
                   type="text"
                   placeholder="Search employee by name ..."
                   aria-label="Search"
                   v-model="searchInput"
                   v-on:keyup="onKeyUp"
                   ><br>
            <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="customCheck1" :checked="showFired" @click="updateShowFired">
            <label class="custom-control-label" for="customCheck1">Show fired employees</label>&nbsp;
            <button type="button" class="btn btn-success" >Hire a new Employee</button>&nbsp;
            <button type="button" class="btn btn-success" :disabled="btnDisable">Fire Employee{{plural}}</button>&nbsp;
            </div>  
        </div>
    </nav>
</template>



<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {

data: () => ({
}),
 computed: {
    ...mapGetters([
      'orderState',
      'selectedEmployeeCount',
      'searchInput',
      'showFired',
      'firedEmployees',
      'firedEmployeesCount',
      'allEmployees',
    ]),
    btnDisable(){
      if(this.selectedEmployeeCount === 0){
          return true
        }else{
          return false
        }
    },
    plural(){
        if(this.selectedEmployeeCount > 1){
            return 's'
        }
    }
  },
  methods: {
      ...mapMutations([
          'changeShowFired',
          'updateSearchInput',
      ]),
      ...mapActions([
        //   'sendOrder',
      ]),
        onKeyUp(e){
            this.updateSearchInput(e.target.value)
        },
        updateShowFired(){
          this.updateSearchInput('')
          this.changeShowFired()
        }
  }

}
 
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>