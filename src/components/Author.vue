<template>
  <div>
    <div class="sign">Created by - Andreas Albihn ITHS - 2019</div>
    <a href="https://www.linkedin.com/in/andreas-albihn/" target="_blank"><img src="../assets/linkedIn.png" alt=""></a>
    <a href="https://github.com/Zyperior" target="_blank"><img src="../assets/GitHub.svg" alt=""></a>
  </div>
</template>

<script>
    export default {
        name: "Author"
    }
</script>

<style scoped>
  .sign{
    width: 60%
  }
  img{
    min-height: 7vmin;
    max-height: 7vmin;
    padding-right: 1vmin;
  }

  @media screen and (min-width: 1200px) and (orientation: landscape) {
    img{
      min-height: 3vmin;
      max-height: 3vmin;
      padding-right: 0.5vmin;
    }
  }
</style>
