<template>
<div class="popup">
  <label for="salary">Salary</label><br>
  <input class="form-control mr-sm-2" type="number" id="salary" name="salary" :placeholder="getEmployeeById(employeeID).salary" v-model="newSalary"><br>
  <button type="button" class="btn btn-success" @click="updateEmployeeSalary(newSalary)">Save</button>&nbsp;&nbsp;&nbsp;&nbsp;
  <button type="button" class="btn btn-success" @click="changeShowModal(undefined)">Cancel</button>
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
    ])
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
  z-index: 20;
}
/* #popup1 {
  -webkit-box-shadow:  0px 0px 0px 9999px rgba(209, 198, 198, 0.5);
  box-shadow:  0px 0px 0px 9999px rgba(223, 215, 215, 0.5);
} */
</style>