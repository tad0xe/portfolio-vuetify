<template>
 
 <nav>
  <v-app-bar fixed dense>
  
     
     <v-app-bar-nav-icon @click="drawer=!drawer" class="hidden-md-and-up"></v-app-bar-nav-icon>
<v-toolbar-title grey--text>
  <span class="font-weight-HEAVY">TADOXE</span>
</v-toolbar-title>
<v-spacer></v-spacer>
<div class="hidden-sm-and-down">
  <v-btn  text large color="error">HOME
     <v-icon>home</v-icon>
  </v-btn>
 
  <v-btn text large color="error">ABOUT</v-btn>
  <v-btn text large color="error">MY SKILLS</v-btn>
  <v-btn text large color="error">CONTACT</v-btn>
</div>



  </v-app-bar>
   
   <v-navigation-drawer v-model="drawer" app class="dark" height="500px">
<v-list nav
        dense
      >
  <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
   <v-list-item >
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title >Home</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item>
  </v-list-item-group>
  </v-list>
   </v-navigation-drawer>

 </nav>
 
</template>

<script>
  export default {
    name: 'HelloWorld',

    data(){
      return{
        drawer:false,
        links:[
          { route:'/'},
          
           {route:'/about'},
            {route:'/contact'},
        ]
      }
    }
  }
</script>
<style scoped>

</style>
