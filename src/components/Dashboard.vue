<template>
    <nav class="navbar navbar-light bg-light">
        <h3>Employee List</h3>

        <!-- <form-modal :inputObjValidation="inputValidation"
                    :inputObj="newEmployee"
        >
          <template v-slot:header>
            <h2>Add a new employee</h2>
          </template>
          <template v-slot:progressBar>
          </template>
          <template v-slot:formElements="slotProps">
            <label :for="slotProps.index">{{slotProps.elem.name}}{{slotProps.index}}</label>
            <span class="fa" 
                  v-if="controls[slotProps.index].activated"
                  :class="controls[slotProps.index].error ? 'fa-exclamation-circle text-danger' : 
                                                  'fa-check-circle text-success'"
                  >
            </span>
            <input type="text"
                   class="form-control" 
                   :id="slotProps.index" 
                   :placeholder="slotProps.elem.name"
                   @input="onInput(slotProps.index, $event.target.value)"
                   >
          </template>
        </form-modal> -->


        <employee-form-modal v-if="showModal2"></employee-form-modal>
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
              <button type="button" class="btn btn-success" @click="openModal2()">Hire a new Employee</button>&nbsp;
              <button type="button" class="btn btn-success" @click="fireSelectedEmployees()" :disabled="btnDisable">Fire Employee{{plural}}</button>&nbsp;
            </div>  
        </div>
    </nav>
</template>



<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
import EmployeeFormModal from '@/components/EmployeeFormModal.vue'
// import FormModal from '@/components/FormModal.vue'



export default {
  components: {
    'employee-form-modal': EmployeeFormModal,
    // 'form-modal': FormModal
  },

data: () => ({
  // controls: [],
  // inputValidation: [
  //   {
  //     name: 'fullname',
  //     value: '',
  //     pattern: /^[a-zA-Z]+$/ 
  //   },
  //   {
  //     name: 'company',
  //     value: '',
  //     pattern: /^[a-zA-Z]+$/ 
  //   },
  //   {
  //     name: 'position',
  //     value: '',
  //     pattern: /^[a-zA-Z]+$/ 
  //   },
  //   {
  //     name: 'admissionDate',
  //     value: '',
  //     pattern: /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/
  //   },
  //   {
  //     name: 'rate',
  //     value: '',
  //     pattern: /^\d{4}$/
  //   },
  //   {
  //     name: 'rateInPercentage',
  //     value: '',
  //     pattern: /^\d{3}$/
  //   },
  //   {
  //     name: 'base',
  //     value: '',
  //     pattern: /^\d{4}$/
  //   },
  //   {
  //     name: 'advance',
  //     value: '',
  //     pattern: /^\d{4}$/
  //   },
  // ],
  // newEmployee: {
  //   id: 0,
  //   name: '',
  //   companyName: '',
  //   positionName: '',
  //   hireDate: '',
  //   fireDate: null,
  //   salary: 0,
  //   fraction: 0,
  //   base: 0,
  //   advance: 0,
  //   byHours: false
  // }

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
      'showModal2',
      'showModal',
      'rowState',
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
  // beforeMount(){ //HOOK
  //   for(let i=0; i<this.inputValidation.length;i++){
  //     this.controls.push({
  //       error: true,
  //       activated: false
  //     })
  //   }
  // },
  methods: {
      ...mapMutations([
          'changeShowFired',
          'updateSearchInput',
          'updateEmployeeCount',
          'changeShowModal2',
          'deleteSelectedEmployees',
          'changeRowState',
          'changeOverlay'
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
          this.updateEmployeeCount()
        },
        fireSelectedEmployees(){
          this.deleteSelectedEmployees()
          this.changeRowState()
        },
        openModal2(){
          this.changeShowModal2()
          this.changeOverlay()
        },
        // onInput(index, value){
        //   let data = this.inputValidation[index]
        //   let control = this.controls[index]
        //   data.value = value
        //   control.error = !data.pattern.test(value)
        //   control.activated = true
        // }
  }

}
 
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>