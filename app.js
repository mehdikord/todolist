const { createApp } = Vue

createApp({

  beforeCreate(){
    console.log("this is before created")

  },

  created(){
    console.log("page is created")

    this.GetGroup();

  },

  mounted(){
    console.log("page is mounted")

  },
  updated(){
    console.log("page is updated")

  },


  data() {
    return {
          add : {
            name : null,
            color : null,
            description : null
          },
      add_item : {
            id : null,
            item:null,
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
        id : Math.floor(Math.random() * 1000000),
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
    },

    AddItem(){

      if (!this.add_item.item || !this.add_item.id){
        return alert('اطلاعات ناقض است')
      }

      this.group.filter(item => {
        if (item.id === this.add_item.id){
          if (!item.list){
            item.list =[];
          }
          item.list.push({
            id : Math.floor(Math.random() * 1000000),
            item : this.add_item.item
          })
        }
      })
      localStorage.setItem('todolist_group',JSON.stringify(this.group));
      this.add_item.item=null;


    }

  }

}).mount('#app')