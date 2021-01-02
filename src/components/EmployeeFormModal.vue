<template>
<div class="modal">

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
      <div v-for="(item, index) in personInfo" :key="index">
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
      <input type="submit" value="Send Data" @click.once="toggleResult()" :disabled="done < controls.length">
    </form>  -->

</div>
</template>


<script>
import { mapGetters, mapMutations } from 'vuex'


export default {

data: () => ({ 
   promo: '',
    sale: 0,
    guests: [],
    controls: [],
    showResult: false,
    personInfo: [
      {
        name: 'email',
        value: '',
        pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      },
      {
        name: 'firstname',
        value: '',
        pattern: /^[a-zA-Z]+$/ 
      },
      {
        name: 'lastname',
        value: '',
        pattern: /^[a-zA-Z]+$/
      },
      {
        name: 'telephone',
        value: '',
        pattern: /^\d{10}$/
      },
    ],
}),
beforeMount(){ //HOOK
    for(let i=0; i<this.personInfo.length;i++){
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
      'getEmployeeById',
      'employeeID',
      'showFired',
      'showModal',
      'firedEmployees',
      'firedEmployeesCount',
      'currentEmployees',
      'currentEmployeesCount',
      'allEmployees',
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
      'changeShowModal',
      'updateEmployeeSalary',
    ]),
    changeColor(e, i){
      if(i%2 === 0){
        e.target.parentNode.style.color = "green"
        e.target.style.color = "green"
      }else{
        e.target.parentNode.style.color = "blue" 
        e.target.style.color = "blue" 
      }
    },
    toggleResult(){
      this.showResult = !this.showResult
    },
    addGuest(){
      this.guests.push('')
    },
    removeGuest(e, index){
      // console.log(e.target.parentNode)
      this.guests.splice(index, 1)
    },
    onInput(index, value){
      let data = this.personInfo[index]
      let control = this.controls[index]
      data.value = value
      control.error = !data.pattern.test(value)
      control.activated = true
    },
    capitalize(str){
      return str.capitalize()
    }
  },
  watch: { // один из примеров - использование с асинхронным кодом
    promo(){
      console.log('promo watcher triggered')
      getSale(this.promo, (sale) => {  //стрелочная ф-ия сохраняет контекст Vue экземпляра
        this.sale = sale
      })
    }
  }

}

// Можно объявлять ф-ии вне области видимости экземпляра Vue и вызывать их в рамках экземпляра
function getSale(code, callback){
  let codes = {
    newYear: 10,
    some: 20
  }
  // console.log(codes['newYear'])
  // console.log(codes[code])
  let sale = (codes[code] !== undefined) ? codes[code] : 0
  // console.log(sale)
  setTimeout(() => {
    callback(sale)
  }, 500)
}

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}
 
</script>





<style scoped>

.modal {
  display: block;
  position: fixed;
  padding: 10px;
  width: 380px;
  left: 50%;
  margin-left: -150px;
  height: 380px;
  top: 50%;
  margin-top: -180px;
  background: rgb(45, 102, 67);
  z-index: 20;
}
/* #popup1 {
  -webkit-box-shadow:  0px 0px 0px 9999px rgba(209, 198, 198, 0.5);
  box-shadow:  0px 0px 0px 9999px rgba(223, 215, 215, 0.5);
} */
</style>