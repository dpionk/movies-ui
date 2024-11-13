<template>
  <div class="modal fade show" tabindex="-1" role="dialog" :style="{ display: 'block' }">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <Form :title="title" @onSubmit="addMovie"></Form>
      </div>
    </div>
  </div>
</template>

<script>
import Form from '@/components/Form/Form.vue'
import movieService from '@/services/movieService'

export default {
  name: 'ConfirmModal',
  props: {
    onCancel: Function,
    onConfirm: Function,
  },
  components: {
    Form,
  },
  data() {
    return {
      title: 'Add movie',
      showConfirmModal: false,
    }
  },
  methods: {
    cancel() {
      this.$emit('onCancel')
    },
    async addMovie(movie) {
      await movieService.addMovie(movie)
      this.$emit('onConfirm')
    },
  },
}
</script>
