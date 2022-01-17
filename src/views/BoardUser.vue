<template>
  <div>
    <HeaderUser />
    <div class="container">
      <header class="jumbotron">
        <h3>{{ content }}</h3>
      </header>
    </div>
  </div>
</template>

<script>
import UserService from '../services/user.service';
import HeaderUser from '../components/HeaderUser.vue';

export default {
  name: 'User',
  components: {
    HeaderUser
  },
  data() {
    return {
      content: ''
    };
  },
  mounted() {
    UserService.getUserBoard().then(
      response => {
        this.content = response.data;
      },
      error => {
        this.content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
      }
    );
  }
};
</script>
<style>
.bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: white;
}
</style>
