<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
    <section class="login-details">
        <p>Log in with</p>
        <section class="login">
            <button><img src="/logo_googleg_48dp.png" alt="google logo">Google</button>
            <button><img src="/Path.png" alt="google logo">Apple</button>
        </section>
        <section class="or-section">
            <img src="/Vector 8.png" width="100" alt="">
            <p>or</p>
            <img src="/Vector 7.png" width="100" alt="">
        </section>

        <form action="">
            <div class="e-mail_wrapper ">
                <!-- <label class="form-label"></label> -->
                <input type="email" class="form-control" id="email" placeholder="Email adress or username" required>
            </div>

            <div class="password__wrapper">
                <!-- <label  class="form-label"></label> -->
                <input type="password" class="form-control" id="password" placeholder="Password">
            </div>

            <section class="forgot-password">
                <p>Forgot password?</p>
                <button class="btn">Log in</button>
            </section>

            <section class="signup">
                <p>Don't have an account?</p><RouterLink to="/signup" class="link"><span>Sign up</span></RouterLink>
            </section>
        </form>

    </section>
</template>

<style scoped>
.login-details {
    height: 50vh;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    /* margin-top: 70px; */
}

.login {
    display: flex;
    /* flex-direction: column; */
    justify-content: center;
    align-items: center;
}

.login button {
    background-color: #005AE2;
    border: none;
    border-radius: 3px;
    margin: 10px;
    font-size: 1.2rem;
    padding: 10px;
    color: #FFFFFF;
}

p {
    text-align: center;
    color: #5C6F7F;
}

.or-section {
    display: flex;
    justify-content: center;
    align-items: center;
}

.or-section p {
    margin: 15px;
    font-size: 1.2em;
}

form {
    text-align: center;
}

.form-control {
    border-color: #005AE2;
    border-radius: 8px;
    padding: 10px 30px;
    font-size: 1rem;
}

.password__wrapper {
    margin-top: 20px;
}

.forgot-password p {
    /* text-align: right; */
    margin-top: 10px;
    margin-left: 150px;
    color: #4991FF;
}

.btn {
    margin-top: 10px;
    padding: 10px 110px;
    border-radius: 100px;
    border: none;
    background-color: #005AE2;
    color: #FFFFFF;
}

.signup{
    display: flex;
    /* flex-direction: row; */
    justify-content: center;
    margin-top: 15px;
    color: #5C6F7F;
}

.signup .link{
    color: #4991FF;
    text-decoration: none;
    padding-left: 5px;
}
</style>