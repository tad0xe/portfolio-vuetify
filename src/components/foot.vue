<template>
  <v-form id="contactform">
  <h1 class="text-center">Contact</h1>
    <v-container fluid dark lighten-3>
     <div class="mx-10 " >
      <v-row justify="center" align-content>
    <v-col cols="12" sm="6" md="6">
          <v-text-field
            label="Solo"
            outlined
            placeholder="Name"
            solo
          ></v-text-field>
          </v-col>
</v-row>
 <v-row justify="center" align-content>
    <v-col cols="12" sm="6" md="6">
          <v-text-field
            label="outlined"
            outlined
            placeholder="Email Address"
            solo
          ></v-text-field>
          </v-col>
</v-row>
 <v-row justify="center" align-content>
    
 <v-col cols="12" sm="6" md="6" class="">
        <v-textarea
         solo
          outlined
          name="input-7-4"
          label="Message"
          
         
        ></v-textarea>
          </v-col>
</v-row>
<div class="text-center">
<v-btn type="submit" large color="error" class="mx-25">send message</v-btn>
</div>
     </div>
    </v-container>
 
  </v-form>
</template>
<script>
export default {
  data(){
    return{}
  },
  methods:{
    function(){
         document.getElementById('contactform').addEventListener('submit',submitform);
         function submitform(e){
           e.preventDefault();

           console.log(123);
  
         }
  }
}
}
</script>
