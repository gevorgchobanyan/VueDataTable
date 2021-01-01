<template>

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
                    @click="changeShowModal(employee['id'])"
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
                      @click="changeShowModal(employee['id'])"
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
    ])
  },
  methods: { // распаковываем Mutations, Actions
    ...mapMutations([
      'changeShowModal',
      'incrementSelectedEmployeeCount',
      'decrementSelectedEmployeeCount',
    ]),
    selectRow(employeeID){
      // console.log(employeeID)
      let tr = document.getElementById(`${employeeID}`)
      if(tr.firstElementChild.childNodes[0].checked){
        tr.classList.add('available')
        this.incrementSelectedEmployeeCount()
      }
      else{
        tr.classList.remove("available");
        this.decrementSelectedEmployeeCount()
      }
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
/* #popup1 {
  -webkit-box-shadow:  0px 0px 0px 9999px rgba(209, 198, 198, 0.5);
  box-shadow:  0px 0px 0px 9999px rgba(223, 215, 215, 0.5);
} */

.disable {
  background-color: rgb(211, 70, 70);
  pointer-events: none;
}
.available {
  background-color: rgb(45, 102, 67);
}
</style>
