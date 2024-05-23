const { createApp } = Vue

createApp({

  created(){

    this.GetGroup();

  },

  data() {
    return {
          add : {
            name : null,
            color : null,
            description : null
          },
      group : []

    }
  },

  methods : {

    AddGroup () {
      if (!this.add.name){

        return alert('نام را وارد کنید')

      }
      if (!this.add.color){
        this.add.color = "#212121";
      }
      this.group.push({
        name : this.add.name,
        color : this.add.color,
        description : this.add.description
      })
      localStorage.setItem('todolist_group',JSON.stringify(this.group));

      this.add.name= null
      this.add.color = null
      this.add.description = null

    },
    GetGroup(){
      if (localStorage.getItem('todolist_group')){

        this.group = JSON.parse(localStorage.getItem('todolist_group'))


      }
    }

  }

}).mount('#app')