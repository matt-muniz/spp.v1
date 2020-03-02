<template>
  <v-footer :fixed="fixed" app inset>
    <span class="text-right" style="width: 100%"
      >&copy; {{ new Date().getFullYear() }}</span
    >
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      fixed: false
    }
  }
}
</script>
