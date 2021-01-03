<template>
  <template v-if="rowState">
    {{actualChangeRowState()}}
  </template>
  <table class="table">
    <tbody>
        <tr>
          <th v-for="header in allHeaders">{{ header['text'] }}</th>
        </tr>

        <modal v-if="showModal"></modal>
        <template v-for="employee in allEmployees" >

          <template v-if="showFired">
            <tr :id="employee['id']" :class="{disable: employee['fireDate']!=null}">
              <td><input class="checkbox" type="checkbox" @click="selectRow(employee['id'])"></td>
              <template v-for="(elem, elemKey) in employee">
                <td v-if="(elemKey === 'salary')"
                    style="cursor:pointer"
                    @click="openModal(employee['id'])"
                >
                    {{ elem }}
                </td>
                <td v-else-if="(elemKey === 'byHours')">
                  <input class="checkbox" type="checkbox" :checked="elem">
                </td>
                <td v-else>
                  {{ elem }}
                </td>
              </template>
            </tr>
          </template>
          <template v-else>
            <template v-if="employee['fireDate']!=null">
              <template></template>
            </template>
            <template v-else>
              <tr :id="employee['id']">
                <td><input type="checkbox" class="checkbox" @click="selectRow(employee['id'])"></td>
                <template v-for="(elem, elemKey) in employee">
                  <td v-if="(elemKey === 'salary')"
                      style="cursor:pointer"
                      @click="openModal(employee['id'])"
                  >
                      {{ elem }}
                  </td>
                  <td v-else-if="(elemKey === 'byHours')">
                    <input type="checkbox" class="checkbox" :checked="elem">
                  </td>
                  <td v-else>
                    {{ elem }}
                  </td>
                </template>
              </tr>
            </template>
          </template>

        </template>
  
    </tbody>
  </table>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import Modal from '@/components/Modal.vue'


export default {
  components: {
    'modal': Modal,
  },
data: () => ({ // распаковываем Setters
}),
 computed: { // распаковываем Getters
    ...mapGetters([
      'allHeaders',
      'employeeID',
      'showFired',
      'showModal',
      'firedEmployees',
      'firedEmployeesCount',
      'currentEmployees',
      'currentEmployeesCount',
      'allEmployees',
      'selectedEmployeeIDs',
      'rowState',
      'selectedEmployeeCount'
    ])
  },
  methods: { // распаковываем Mutations, Actions
    ...mapMutations([
      'changeShowModal',
      'incrementSelectedEmployeeCount',
      'decrementSelectedEmployeeCount',
      'addEmployeeID',
      'removeEmployeeID',
      'changeRowState',
      'changeOverlay',
    ]),
    selectRow(employeeID){
      // console.log(employeeID)
      let tr = document.getElementById(`${employeeID}`)
      if(tr.firstElementChild.childNodes[0].checked){
        tr.classList.add('available')
        this.incrementSelectedEmployeeCount()
        this.addEmployeeID(employeeID)
      }
      else{
        tr.classList.remove("available");
        this.decrementSelectedEmployeeCount()
        this.removeEmployeeID(employeeID)
      }
    },
    actualChangeRowState(){
      let trs = document.querySelectorAll('tr')
      console.log(trs)
      for(let i=1;i<trs.length;i++){
        if(trs[i].className === 'available'){
          trs[i].classList.remove('available')
          console.log(trs[i].childNodes[0].childNodes[0].checked = false)
        }
      }
      this.changeRowState()
    },
    openModal(employeeID){
      this.changeShowModal(employeeID)
      this.changeOverlay()
    }
  }

}
 
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
  background: rgb(45, 102, 67);
  z-index: 20;
}


.disable {
  background-color: rgb(211, 70, 70);
  pointer-events: none;
}
.available {
  background-color: rgb(45, 102, 67);
}
</style>
