<template>
 <v-img src="g.jpg" width="100%" height="1000px">
  <v-container  class="my-10" color="error">
   
    <div class="mx-10 my-15 pa-10 transparent align-items-center">
    <v-card-text class="text-center pa-10">
    <h1 class="error--text" >Hi</h1>
    <br>
    <h2 class="text-capitalize font-weight-bold">i'm joe,</h2>
    <br>
<h2>WEB DESIGNER.</h2>

<p class="text--disabled my-5">HTML  /  CSS  /  VUE JS</p> 
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="error"
          dark
          v-bind="attrs"
          v-on="on"
        >
          CONTACT ME
        </v-btn>
      </template>
      <v-card>
        
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
<v-btn large color="error" class="mx-25">send message</v-btn>
</div>
     </div>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" text @click="dialog = false">Send</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
    </v-card-text>
    </div> 
          
  </v-container>
  
 </v-img>
</template>



  

<script>
  export default {
    data: () => ({
      dialog: false,
    }),
  }
</script>

