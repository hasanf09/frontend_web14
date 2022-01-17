<template>
  <h1>Dashboard</h1>
</template>
<script>
export default {
  name:'Dashboard',
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push('/login');
    }
  }
};
</script>