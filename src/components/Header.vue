<template>
<div id="header">
  <v-countainer>
    <div class="header-left">
      <div class="logo">
        <router-link to="/">
          <a href="#">
            <img src="~@/assets/logo1.png">
          </a>
        </router-link>
      </div>
    </div>
    <div class="header-right">
      <div class="login">
        <router-link to="/login">
        <button class="btn btn-danger active">Login</button>
        </router-link>
      </div>
    </div>
  </v-countainer>
</div>
</template>

<script>
export default {
  name:"Header",
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
.login {
  display: flex;
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
  width: 88px;
}
.login:hover {
  color: #51585e;
}
.login i {
  padding: 0 10px;
  margin: 0;
  vertical-align: middle;
}

</style>