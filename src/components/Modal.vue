<template>
<div class="popup">
  <label for="salary">Salary</label><br>
  <input class="form-control mr-sm-2" type="number" id="salary" name="salary" :placeholder="getEmployeeById(employeeID).salary" v-model="newSalary"><br>
  <button type="button" class="btn btn-success" @click="updateSalary(newSalary)">Save</button>&nbsp;&nbsp;&nbsp;&nbsp;
  <button type="button" class="btn btn-success" @click="close(undefined)">Cancel</button>
</div>
</template>


<script>
import { mapGetters, mapMutations } from 'vuex'

export default {

data: () => ({ 
newSalary: 0,
}),
 computed: {
    ...mapGetters([
      'getEmployeeById',
      'employeeID',
      'showFired',
      'showModal',
      'firedEmployees',
      'firedEmployeesCount',
      'currentEmployees',
      'currentEmployeesCount',
      'allEmployees',
    ])
  },
  methods: {
    ...mapMutations([
      'changeShowModal',
      'updateEmployeeSalary',
      'changeOverlay',
    ]),
    updateSalary(newSalary){
      this.updateEmployeeSalary(newSalary)
      this.changeOverlay()

    },
    close(){
      this.changeShowModal(undefined)
      this.changeOverlay()
    }
  }

}
 
</script>









<style scoped>

.popup {
  display: block;
  position: fixed;
  padding: 10px;
  width: 280px;
  left: 50%;
  margin-left: -150px;
  height: 180px;
  top: 50%;
  margin-top: -100px;
  background: #28a745;
  border-radius: 10px;
  z-index: 20;
}

</style>