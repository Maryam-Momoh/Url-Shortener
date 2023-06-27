<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <header>
    <section>
      <p>Optimize Your Online Experience with Our <br>
        Advanced <span>URL Shortening</span> Solution</p>
      <img src="/circle.png">
    </section>
    <p>Personalize your shortened URLs to allign with your brand
      identity. Utilize custom slugs, <br>branded links, and domain customization options to reinforce your brand presence
      and <br> enforce user engagement.
    </p>
  </header>
  <section class="sign-up">
     <RouterLink to="/signup"><button>Sign up</button></RouterLink>
    <span>Learn more</span>
  </section>
  <section class="float">
    <img src="/full.png" alt="">
  </section>

  <section class="hologram">
    <img src="/eclipse.png" width="1340" alt="">
  </section>

  <footer>
    <section class="footer-section">
      <h1>One Stop <br> Four <span>Possibilities</span>.</h1>
    </section>

    <section class="footer-section-1">
      <div class="footer-sub">
        <h2>3M</h2>
        <p>Active Users</p>
      </div>

      <div class="footer-sub">
        <h2>60M</h2>
        <p>Links & QR <br>
        code created</p>
      </div>

      <div class="footer-sub">
        <h2>1B</h2>
        <p>Clicked & Scanned <br> connections</p>
      </div>

      <div class="footer-sub">
        <h2>300K</h2>
        <p>App Integrations</p>
      </div>
    </section>
  </footer>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter&family=Kanit:wght@600&display=swap');

/* :root{
    --font-color:#005AE2E5;
} */

header {
  margin-top: 50px;
  /* min-width: 400px; */
}

header section p {
  font-size: 2rem;
  text-align: center;
  font-family: 'Inter', sans-serif;
  font-weight: bold;
  color: #141414;
}

header section img {
  position: absolute;
  width: 173.63px;
  height: 19.91px;
  left: 44%;
}

header section p span {
  color: #005AE2;
  font-family: 'Kanit', sans-serif;
}

header p {
  margin-top: 40px;
  text-align: center;
  font-family: 'Inter', sans-serif;
}

.sign-up {
  text-align: center;
  margin-top: 20px;
}

.sign-up button:hover{
  color:#005AE2;
  background: transparent;
  border-color:#005AE2;
  transition: 1s ease-out;
}

.sign-up button {
  font-size: 1.2rem;
  border-radius: 20px;
  background: #005AE2E5;
  color: white;
  /* border: none; */
  padding: 10px 30px;
  border-color:#005AE2;
}

.sign-up span {
  margin-left: 35px;
  color: #0065FE;
  font-size: 1.2rem;
}

.float {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  border: #005AE2 2px;
  background-color: #FEFEFE1A;
  /* background-color: yellowgreen;
  min-width: 300px; */
}

.float p {
  font-size: 1.2rem;
}

.vector-1 {
  margin-right: 20px;
}

.vector-2 {
  margin-right: 30px;
}

.hologram{
  display: flex;
  justify-content: center;
  align-items: center;
  /* width: 1000px ; */
}

footer{
  display: grid;
  /* justify-content: ; */
  grid-template-columns: 0.5fr 1fr;
  /* margin-top: 50px; */
  background-color: #F9FBFD;
  font-family: 'Inter', sans-serif;
}

.footer-section{
  display: flex;
  justify-content: center;
  /* align-items: center; */
  margin-top: 30px;
  font-size: 1.3rem;
}

.footer-section h1 span{
  color: #005AE2;
}
.footer-section-1{
  margin-top: 30px;
  display: flex;
  justify-content: space-evenly;
  flex-grow: 2;
  width: 100%;
  font-family: 'Inter', sans-serif;
}

</style>
