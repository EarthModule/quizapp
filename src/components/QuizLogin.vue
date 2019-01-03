<template>
  <div class="container">
    <form>
      <div class="form-group">
        <label for="name">Name</label>
        <input class="form-control"
               type="text"
               id="name"
               placeholder="Enter name"
               v-model="userName">
      </div>

    </form>
    <button
      class="btn btn-primary"
      @click="registerUser">Submit</button>

  </div>
</template>

<script>
    export default {
        name: "QuizLogin",
        data:function(){
          return{
            userName:null
          }
        },
        methods:{
          registerUser(){
            this.$http.post('user/create',
              {user_name:this.userName})
              .then(response => {

                return response.json();
              })
          }
        }

    }
</script>

<style scoped>

</style>

