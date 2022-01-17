<template>
<div>
<Header/>
  <div id="banner">
      <div class="bg-gradient"></div>
      <div class="title">
          <h1>Film, Buku, Komik, dan lebih banyak lagi.</h1>
          <h2>Terdapat koleksi apa saja yang dapat kamu review</h2>
          <h3>Berlangganan sekarang</h3>
          <form action="" @submit.prevent="">
              <input type="email" placeholder="Alamat email">
              <input type="submit" value="Mulai">
          </form>
      </div>
  </div>
</div>
</template>

<script>
import Header from '../components/Header.vue'
export default {
    name:'Home',
    components: {
        Header,
    },
    data() {
        return {

        }
    }
}
</script>

<style scoped>
#banner {
    z-index: 2;
    background: red;
    background: url('~@/assets/img/bgvueflix.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    height: 817px;
    width: 100%;
    text-align:center;
    position: relative;
    /* overflow: hidden; */
}
.bg-gradient {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom:0;
    background:linear-gradient(to top, rgba(0, 0, 0, 0.8) 0px, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%) rgba(0, 0, 0, 0.4);
}
.title {
    position:absolute;
    top: 24%;
    left: 50%;
    transform:translateY(-50%);
    transform:translateX(-50%);
    color: #fff;
    max-width:600px;
}
.title form {
    position: relative;
    width: auto;
    display: inline-block;
    margin-left: -108px;
}
.title form input {
    outline: none;
    border: none;    
}
.title form input[type="email"] {
    background: #fff;
    padding:12px;
    width: 400px;
    font-size: 16px;
}
.title form input[type="submit"] {
    background: red;
    padding:12px 40px;
    position: absolute;
    left: 100%;
    top: 0;
}
.title h1 {
    font-size:46px;
    font-weight: 700;
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
}
.title h2 {
    margin-top: 20px;
    font-weight: 300;
    font-size: 20px;
}
.title h3 {
    margin-top: 30px;
    margin-bottom: 30px;
    font-size: 14px;
    font-weight:200;
}
</style>