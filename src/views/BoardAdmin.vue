<template>
<div>
  <HeaderAdmin/>
  <div class="container">
    <header class="jumbotron">
      <h3>{{content}}</h3>
    </header>
  </div>
</div>
</template>

<script>
import UserService from '../services/user.service'
import HeaderAdmin from '../components/HeaderAdmin.vue'

export default {
  name: 'Admin',
  components: {
    HeaderAdmin,
  },
  data() {
    return {
      content: ''
    };
  },
  mounted() {
    UserService.getAdminBoard().then(
      response => {
        this.content = response.data;
      },
      error => {
        this.content =
          (error.response && error.response.data && error.response.data.message) ||
          error.message ||
          error.toString();
      }
    );
  }
};
</script>
