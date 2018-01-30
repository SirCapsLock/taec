<template>
  <div id="app">
	  <div class="main container">
		<app-header/>
		<router-view></router-view>
	  </div>
  </div>
</template>

<script>
import axios from 'axios'
import AppHeader from './components/AppHeader'

export default {
  name: 'app',
  components: { AppHeader },
  data () {
    return {
    }
  },
}
</script>

<style lang="scss">
html,body {
	height: 100%;
  background: url('../images/dark.png');
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}
.main {
	background: #FFF;
	height: 100%;
	/*box-shadow: 0 0 1.5em .5em #e07f33;*/
}

.section {
  background: #FFF;
  border-bottom: 5px solid #e07f33;
}

.title {
  font-family: 'Alegreya Sans SC';
  color: #f6881f;
}

.awesome {
  color: #f6881f;
}

</style>
