<template>
<div id="header">
  <v-countainer>
    <div class="header-left">
      <div class="logo">
        <router-link to="/user">
            <img src="~@/assets/logo1.png">
        </router-link>
      </div>
    </div>
    <div class="header-right">
      <div class="logOut">
        <button class="btn btn-danger active">
            <a class="text" href @click.prevent="logOut">
            LogOut
            </a>
        </button>
      </div>
    </div>
  </v-countainer>
</div>
</template>

<script>
export default {
  name:"HeaderUser",
  methods: {
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    }
  }
}
</script>

<style>
img {
  display: block;
  max-width: 100%;
}
#header {
  position: fixed;
  left: 40px;
  right: 40px;
  top: 24px;
  /* background: #020502; */
  background: transparent;
  color: #ffff;
  z-index: 3;
  transition: all 0.2s;
  padding: 0;
}
#header .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header-left {
  display: flex;
}
.logo {
  width: 150px;
}
.btn-danger {
  background-color: red !important;
}
.header-right {
  display: flex;
}
.header-right {
  display: flex;
}
.logOut {
  display: flex;
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
  width: 88px;
}
.logOut:hover {
  color: #51585e;
}
.logOut i {
  padding: 0 10px;
  margin: 0;
  vertical-align: middle;
}
.text {
    color: antiquewhite;
}

</style>