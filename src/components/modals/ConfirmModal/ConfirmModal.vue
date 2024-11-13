<template>
     <div 
      class="modal fade show" 
      tabindex="-1" 
      role="dialog"
      :style="{ display:'block'}"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Confirm</h5>
          </div>
          <div class="modal-body">
            <p>Are you sure?</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="cancel">Cancel</button>
            <button type="button" class="btn btn-primary" @click="confirm">Confirm</button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name: "ConfirmModal",
    props: {
        onCancel: Function,
        onConfirm: Function
    },
    data() {
        return {
            showConfirmModal: false,
        }
    },
    methods: {
        cancel() {
            this.$emit("onCancel");
        },
        confirm() {
            this.$emit("onConfirm");
        }
    }
}
</script>