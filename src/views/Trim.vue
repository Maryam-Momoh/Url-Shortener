<script setup lang="ts" >


</script>

<template>
    <section class="header">
        <form action="">
            <div class="Url-wrapper ">
                <input type="email" class="form-control" id="email" placeholder="Paste URL here...." required>
                <button>Trim URL</button>
                
            </div>
        </form>
        <!-- <section class="url-links">
            <div class="link">
                <p>https://www.canva.com/</p>
            </div>
            <div class="link">
                <p>https://github.com/Maryam-Momoh</p>
            </div>
        </section> -->
    </section>
</template>

<style scoped>
.header{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10%;
}

input{
    padding: 20px 50px;
    border-radius: 12px;
    outline: none;
    border-color: #3284FF;
    font-size: 1.2rem;
}

.Url-wrapper{
    display: flex;
    flex-direction: column;
    justify-content: center;
}

button{
    margin-top: 10px;
    font-size: 1em;
    background-color: #005AE2;
    border: none;
    border-radius: 12px;
    padding-bottom:10px ;
    color: aliceblue;
}

.url-links{
    margin-top: 20px;
}
</style>