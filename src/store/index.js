import { createStore } from 'vuex'

export default createStore({
  state: { //
    
    // orderState: '',

    searchInput: '',
    showModal: false,
    employeeID: 0,
    showFired: true,
    selectedEmployeeCount: 0,
    headers: [
      { text: ' ', value: 'checkbox', filterable: true },
      { text: 'ID', value: 'id', filterable: true },
      { text: 'Employee', value: 'name', filterable: true },
      { text: 'Company', value: 'companyName', filterable: false },
      { text: 'Position ', value: 'positionName', filterable: false },
      { text: 'Date of admission', value: 'hireDate', filterable: false },
      { text: 'Date of dismissal', value: 'fireDate', filterable: false },
      { text: 'Rate', value: 'salary', filterable: false },
      { text: 'Rate in %', value: 'fraction' },
      { text: 'Base', value: 'base', filterable: false },
      { text: 'Advance', value: 'advance', filterable: false },
      { text: 'Hourly', value: 'byHours', filterable: false },
    ],
      employees: [
    { 
      id: 1,
      name: 'George Washington',
      companyName: 'IBM',
      positionName: 'First President',
      hireDate: '1789-04-30',
      fireDate: '1797-03-04',
      salary: 1000,
      fraction: 100,
      base: 1000,
      advance: 1000,
      byHours: false
    },
    {
      id: 2,
      name: 'Richard I the Lionheart',
      companyName: 'IBM',
      positionName: 'King',
      hireDate: '1189-01-01',
      fireDate: '1199-05-17',
      salary: 1000,
      fraction: 100,
      base: 1000,
      advance: 1000,
      byHours: true
    },
    {
      id: 3,
      name: 'Jason Statham',
      companyName: 'Google',
      positionName: 'Bacon',
      hireDate: '1998-09-01',
      fireDate: null,
      salary: 1000,
      fraction: 100,
      base: 1000,
      advance: 1000,
      byHours: false
    },
    {
      id: 4,
      name: 'Tarantino C.J.',
      companyName: 'Google',
      positionName: 'Jimmy',
      hireDate: '1994-04-15',
      fireDate: null,
      salary: 1000,
      fraction: 100,
      base: 1000,
      advance: 1000,
      byHours: false
    },
    {
      id: 5,
      name: 'Cumberbatch B.',
      companyName: 'Google',
      positionName: 'Smile',
      hireDate: '1000-01-01',
      fireDate: '2941-10-09',
      salary: 1000,
      fraction: 100,
      base: 1000,
      advance: 1000,
      byHours: false
    },
    {
      id: 6,
      name: 'Kruzenshtern',
      companyName: 'Amazon',
      positionName: 'Human',
      hireDate: '1770-11-08',
      fireDate: null,
      salary: 1000,
      fraction: 100,
      base: 1000,
      advance: 1000,
      byHours: false
    },
    {
      id: 7,
      name: 'Bender S.R.',
      companyName: '"Planet Express"',
      positionName: 'Robot',
      hireDate: '2997-03-27',
      fireDate: null,
      salary: 1000,
      fraction: 100,
      base: 1000,
      advance: 1000,
      byHours: true
    },
    {
      id: 8,
      name: 'Jon Jones',
      companyName: ' UFC co.',
      positionName: 'UFC CEO',
      hireDate: '1789-04-30',
      fireDate: null,
      salary: 1000,
      fraction: 100,
      base: 1000,
      advance: 1000,
      byHours: false
    },
    ]
  },
  getters: { // create getters for data that is required in multiple components

    // orderState (state) {
    //   return state.orderState
    // },

    selectedEmployeeCount (state){
      return state.selectedEmployeeCount
    },
    allHeaders (state){
      return state.headers
    },
    searchInput (state) {
      return state.searchInput
    },
    employeeID (state){
      return state.employeeID
    },
    allEmployees (state) {
      // console.log('envoked')
      if(state.searchInput === ''){
        return state.employees
      }
      else{
        let filter = state.searchInput.toUpperCase()
        let newEmployeeArr = []
        for (let i = 0; i < state.employees.length; i++){
          if(state.employees[i]['name'].toUpperCase().indexOf(filter) > -1){
            newEmployeeArr.push(state.employees[i])
          }
        }
        return newEmployeeArr
      }
    },
    showFired (state) {
      return state.showFired
    },
    showModal (state){
      return state.showModal
    },
    firedEmployees (state) {
        return state.employees.filter(employee => employee.fireDate != null)
    },
    firedEmployeesCount (state, getters) {
      return getters.firedEmployees.length
    },
    currentEmployees (state) {
      // console.log('envoked')
      if(state.searchInput === ''){
        return state.employees.filter(employee => employee.fireDate === null)
      }
      else{
        let currentEmployeesArr = state.employees.filter(employee => employee.fireDate === null)
        let filter = state.searchInput.toUpperCase()
        let newCurrentEmployeeArr = []
        for (let i = 0; i < currentEmployeesArr.length; i++){
          if(currentEmployeesArr[i]['name'].toUpperCase().indexOf(filter) > -1){
            newCurrentEmployeeArr.push(currentEmployeesArr[i])
          }
        }
        return newCurrentEmployeeArr
      }
    },
    currentEmployeesCount (state, getters) {
      return getters.currentEmployees.length
    },
    getEmployeeById: (state) => (id) => {
      return state.employees.find(employee => employee.id === id)
    }
  },
  mutations: { // mutations are synchronous transaction
    changeShowFired (state) {
      state.showFired = !state.showFired
    },
    changeShowModal (state, employeeID) {
      state.showModal = !state.showModal
      state.employeeID = employeeID
      // console.log('changed to ' + state.showModal + '   employee id is ' + state.employeeID)
    },
    updateEmployeeSalary (state, newSalary) {
      state.showModal = !state.showModal
      state.employees.find(employee => employee.id === state.employeeID).salary = newSalary
    },
    updateSearchInput (state, input) {
      state.searchInput = input
    },
    incrementSelectedEmployeeCount (state){
      state.selectedEmployeeCount++
    },
    decrementSelectedEmployeeCount (state){
      state.selectedEmployeeCount--
    },
    // orderSend (state) {
    //   state.orderState = 'pending'
    // },
    // orderDone (state) {
    //   state.orderState = 'done'
    // }

  },
  actions: { // actions are asynchronous transaction
    // sendOrder (store) {
    //   store.commit('orderSend')
    //   setTimeout(() => {
    //     store.commit('orderDone')
    //   }, 2000)
    // },
  },
  modules: {
  }
})
