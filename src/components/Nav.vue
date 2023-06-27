<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
    <nav>
        <section class="nav-section">
            <section class="logo-section">
                <img src="/Vector.png" alt="logo">
                <img src="/vector2.png" alt="logo">
                <RouterLink to="/" class="logo">
                    <p>Scissors</p>
                </RouterLink>
            </section>

            <section class="nav-links-1">
                <RouterLink to="" class="nav-links">My URLs</RouterLink>
                <!-- <RouterLink to="">Pricing</RouterLink> -->
                <RouterLink to="" class="nav-links">Analytics</RouterLink>
                <RouterLink to="" class="nav-links">FAQs</RouterLink>
            </section>

            <section class="nav-links-2">
                <RouterLink to="/login" class="link">
                    <p>Login</p>
                </RouterLink>
                <RouterLink to="/trim" class="link"><button>Try for free</button></RouterLink>
            </section>
        </section>
    </nav>
</template>

<style scoped>
.nav-section {
    display: flex;
    justify-content: space-between;

}

.logo-section {
    display: grid;
    grid-template-columns: 0.5fr 0.2fr 1fr;
    margin-top: 20px;

}

.logo {
    color: #005AE2E5;
    font-family: 'Inter', sans-serif;
    font-size: 1.5rem;
    font-weight: bold;
    text-decoration: none;

}

.nav-links-1 {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    /* place-items: center; */
    font-size: 1.3rem;
    margin-top: 20px;

}

.nav-links {
    margin: 0 30px;
    color: #141414;
    text-decoration: none;
}

.nav-links:hover {
    color: #005AE2E5;
    transition: 0.4s ease-in;
}

.nav-links-1 .logo {
    padding-left: 40px;
}

.nav-links-2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    font-size: 1.3rem;
    margin-right: 30px;
}

.link {
    color: #141414;
    text-decoration: none;
}

.nav-links-2 p {
    margin-top: 20px;
}

.nav-links-2 button {
    padding: 10px;
    font-size: 1.2rem;
    border-radius: 20px;
    background: transparent;
    border-color: #005AE2E5;
    margin-top: 10px;
}

.nav-links-2 button:hover {
    background: #005AE2E5;
    color: white;
    transition: 0.5s ease-in;
}</style>