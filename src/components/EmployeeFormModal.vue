<template>
  <div class="modal">
    <h2>Adding a new employee</h2>

    <div>
      <div class="progress" style="width: 100%;">
        <div class="progress-bar" 
            role="progressbar" 
            :style="progressWidth" 
            aria-valuenow="25" 
            aria-valuemin="0" 
            aria-valuemax="100"
            >
            {{ done/controls.length*100 }} %
        </div>
      </div>
      <!-- <form class="form-group" style="width: 100%;" v-on:submit.prevent>
        <div v-for="(item, index) in employeeInfo" :key="index">
          <div>
            <label>{{ capitalize(item.name) }}</label>
            <span class="fa" 
                  v-if="controls[index].activated"
                  :class="controls[index].error ? 'fa-exclamation-circle text-danger' : 
                                                  'fa-check-circle text-success'"
                  >
            </span>
            <br>
            <input class="form-control form-control-sm"
                  type="text"
                  v-bind:value="item.value"
                  @input="onInput(index, $event.target.value)"
            >
            <br>
          </div>
        </div>
        <input type="submit" value="Add Employee" @click.once="toggleResult()" :disabled="done < controls.length">
        <input type="submit" value="Cancel">
      </form>  -->


      <form>
        <div>
          <div class="col-md-14 mb-3">
            <label for="validationDefault01">Full Name</label>
            <span class="fa" 
                  v-if="controls[0].activated"
                  :class="controls[0].error ? 'fa-exclamation-circle text-danger' : 
                                                  'fa-check-circle text-success'"
                  >
            </span>
            <input type="text"
                   class="form-control" 
                   id="validationDefault01" 
                   placeholder="Full Name"
                   v-model="newEmployee.name"
                   @input="onInput(0, $event.target.value)"
                   >
          </div>
          <div class="col-md-14 mb-3">
            <label for="validationDefault02">Company</label>
            <span class="fa" 
                  v-if="controls[1].activated"
                  :class="controls[1].error ? 'fa-exclamation-circle text-danger' : 
                                                  'fa-check-circle text-success'"
                  >
            </span>
            <input type="text" 
                   class="form-control" 
                   id="validationDefault02" 
                   placeholder="Company"
                   v-model="newEmployee.companyName"
                   @input="onInput(1, $event.target.value)"
            >
          </div>
          <div class="col-md-14 mb-3">
            <label for="validationDefault03">Position</label>
            <span class="fa" 
                  v-if="controls[2].activated"
                  :class="controls[2].error ? 'fa-exclamation-circle text-danger' : 
                                                  'fa-check-circle text-success'"
                  >
            </span>
            <input type="text" 
                   class="form-control" 
                   id="validationDefault03" 
                   placeholder="Position"
                   v-model="newEmployee.positionName"
                   @input="onInput(2, $event.target.value)"
            >
          </div>
        </div>
        <div class="form-row">
          <div class="col-md-4 mb-3">
            <label for="validationDefault04">Admission Data</label>
            <span class="fa" 
                  v-if="controls[3].activated"
                  :class="controls[3].error ? 'fa-exclamation-circle text-danger' : 
                                                  'fa-check-circle text-success'"
                  >
            </span>
            <input type="text" 
                   class="form-control" 
                   id="validationDefault04" 
                   placeholder="11/1111/11"
                   v-model="newEmployee.hireDate"
                   @input="onInput(3, $event.target.value)"
            >
          </div>
          <div class="col-md-4 mb-3">
            <label for="validationDefault05">Salary</label>
            <span class="fa" 
                  v-if="controls[4].activated"
                  :class="controls[4].error ? 'fa-exclamation-circle text-danger' : 
                                                  'fa-check-circle text-success'"
                  >
            </span>
            <input type="text" 
                   class="form-control" 
                   id="validationDefault05" 
                   v-model="newEmployee.salary"
                   @input="onInput(4, $event.target.value)"
            >
          </div>
          <div class="col-md-4 mb-3">
            <label for="validationDefault06">Rate in %</label>
            <span class="fa" 
                  v-if="controls[5].activated"
                  :class="controls[5].error ? 'fa-exclamation-circle text-danger' : 
                                                  'fa-check-circle text-success'"
                  >
            </span>
            <input type="number" 
                   class="form-control" 
                   id="validationDefault06" 
                   v-model="newEmployee.fraction"
                   @input="onInput(5, $event.target.value)"
            >
          </div>
        </div>
        <div class="form-row">
          <div class="col-md-4 mb-3">
            <label for="validationDefault07">Base</label>
            <span class="fa" 
                  v-if="controls[6].activated"
                  :class="controls[6].error ? 'fa-exclamation-circle text-danger' : 
                                                  'fa-check-circle text-success'"
                  >
            </span>
            <input type="number" 
                   class="form-control" 
                   id="validationDefault07" 
                   v-model="newEmployee.base"
                   @input="onInput(6, $event.target.value)"
            >
          </div>
          <div class="col-md-4 mb-3">
            <label for="validationDefault08">Advance</label>
            <span class="fa" 
                  v-if="controls[7].activated"
                  :class="controls[7].error ? 'fa-exclamation-circle text-danger' : 
                                                  'fa-check-circle text-success'"
                  >
            </span>
            <input type="number" 
                   class="form-control" 
                   id="validationDefault08" 
                   v-model="newEmployee.advance"
                   @input="onInput(7, $event.target.value)"
            >
          </div>
        </div>
        <div class="form-group">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="gridCheck" v-model="newEmployee.byHours">
            <label class="form-check-label" for="gridCheck">
              Hourly
            </label>
          </div>
        </div>
        <button type="button" class="btn btn-success" @click="SaveResult()" :disabled="done < controls.length">Add a new Employee</button>&nbsp;
        <button type="button" class="btn btn-success" @click="changeShowModal2()">Cancel</button>&nbsp;
      </form>

    </div>
  </div>
</template>


<script>
import { mapGetters, mapMutations } from 'vuex'


export default {

data: () => ({ 
    controls: [],
    employeeInfo: [
      {
        name: 'fullname',
        value: '',
        pattern: /^[a-zA-Z]+$/ 
      },
      {
        name: 'company',
        value: '',
        pattern: /^[a-zA-Z]+$/ 
      },
      {
        name: 'position',
        value: '',
        pattern: /^[a-zA-Z]+$/ 
      },
      {
        name: 'admissionDate',
        value: '',
        pattern: /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/
      },
      {
        name: 'rate',
        value: '',
        pattern: /^\d{4}$/
      },
      {
        name: 'rateInPercentage',
        value: '',
        pattern: /^\d{3}$/
      },
      {
        name: 'base',
        value: '',
        pattern: /^\d{4}$/
      },
      {
        name: 'advance',
        value: '',
        pattern: /^\d{4}$/
      },
    ],
    newEmployee: {
      id: 0,
      name: '',
      companyName: '',
      positionName: '',
      hireDate: '',
      fireDate: null,
      salary: 0,
      fraction: 0,
      base: 0,
      advance: 0,
      byHours: false
    }
}),
beforeMount(){ //HOOK
    for(let i=0; i<this.employeeInfo.length;i++){
      this.controls.push({
        error: true,
        activated: false
      })
    }
  },
 computed: { // свойства которые высчитываются на основе других
  // computed нельзя использовать при выполнении асинхронных операций т.к. computed высчитывается
  // сразу как только зависимая переменная меняет значение (т.е. данные с сервера не успеют прийти)
    ...mapGetters([
      'showModal2',
    ]),
    done(){
      let done = 0
      for(let i=0; i<this.controls.length;i++){
        if(!this.controls[i].error){
          done++
        }
      }
      return done
    },
    progressWidth(){
      return {
        width: (this.done / this.controls.length * 100) + '%'
      }
    }
  },
  methods: {
    ...mapMutations([
      'changeShowModal2',
      'addNewEmployee',
    ]),
    SaveResult(){
      this.addNewEmployee(this.newEmployee)
      this.changeShowModal2()
    },
    onInput(index, value){
      let data = this.employeeInfo[index]
      let control = this.controls[index]
      data.value = value
      control.error = !data.pattern.test(value)
      control.activated = true
    },
  },
}

</script>


<style scoped>

.modal {
  display: block;
  position: fixed;
  padding: 10px;
  width: 480px;
  left: 50%;
  margin-left: -250px;
  height: 300px;
  top: 50%;
  margin-top: -180px;
  background: #cbd4cb;
  z-index: 20;
  overflow: auto;
}
/* #popup1 {
  -webkit-box-shadow:  0px 0px 0px 9999px rgba(209, 198, 198, 0.5);
  box-shadow:  0px 0px 0px 9999px rgba(223, 215, 215, 0.5);
} */


</style>