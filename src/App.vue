<template>

  <v-app class="black darken-3">
   
<HelloWorld/>
<About/>
<Service/>

    <v-content >
      <router-view></router-view>
    </v-content>
    <Rogress/>
    <foot/>
  </v-app>

</template>

<script>
import HelloWorld from './components/HelloWorld'
import About from './views/About'
import Service from './components/Service'
import Rogress from './components/Rogress'
import foot from './components/foot'
;

export default {
  name: 'App',

  components: {
    HelloWorld,
    About,
    Service,
    Rogress,
    foot,
  },

  data: () => ({
    //
  }),
};
</script>
