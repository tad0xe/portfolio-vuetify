<template>
<v-container class="my-15 py-15">
  <H3 class="error--text text-center">SKILLS</H3>
  
  <div width="80%" class="mx-13 my-5">
    <h4 class="error--text">HTML</h4>
    <v-progress-linear
      color="error"
      rounded
      height="16px"
      value="90"
    >90%</v-progress-linear>
    <br>
    <H4 class="indigo--text">CSS</H4>
    <v-progress-linear
      color="indigo"
      rounded
      value="90"
      height="16px"
    >90%</v-progress-linear>
    <br>
    <H4 class="teal--text">VUE JS</H4>
    <v-progress-linear
      color="teal"
      rounded
      height="16px"
      value="90"
    >90%</v-progress-linear>
    <br>
    <h4 class="text-capitalize cyan--text">JAVA SCRIPT</h4>
    <v-progress-linear
      color="cyan"
      value="80"
      height="16px"
    >80%</v-progress-linear>
  </div>
  
</v-container>
</template>