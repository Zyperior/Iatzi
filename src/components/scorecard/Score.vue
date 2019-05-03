<!--Representation: A selected score value or a player ID
    Author: Andreas Albihn, 2019-->
<template>
  <div>
    <div v-if=" value === 'A' || value === 'B' || value === 'C' || value === 'D'">{{value}}</div>
    <div v-else-if="value > -1">{{value}}</div>
  </div>
</template>

<script>
    export default {
      name: "Score",
      props: ['value',]
    }
</script>

