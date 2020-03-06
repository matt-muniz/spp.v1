<template>
  <v-footer dark absolut inset>
    <span class="text-right" style="width: 100%"
      >&copy; {{ new Date().getFullYear() }}</span
    >
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      fixed: true
    }
  }
}
</script>
