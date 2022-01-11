<template>
  <button
    class="invite-button"
    :class="{ 'invite-button-animate': animate, 'button-off': off }"
  >
    <slot><div class="btn-text">{{title}}</div></slot>
  </button>
</template>

<script>
export default {
  name: 'vs-button',
  props: {
    animate: {
      type: Boolean,
      default: true
    },
    off: Boolean,
    title: {
      type: String,
      default: 'Invite Friends'
    }
  }
}
</script>

<style lang="less" scoped>
.invite-button {
  width: 300px;
  height: 30px;
  color: #ffffff;
  background: orange;
  border: none;
  outline: none;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.5;
  text-align: center;
  color: #ffffff;
  position: relative;
  border-radius: 12px;
  .btn-text{
    line-height: 1;
  }
}

.button-off {
  background: gray;
}

.invite-button-animate {
  animation: invite-btn 1s infinite;
}

@keyframes invite-btn {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.04);
  }
  100% {
    transform: scale(1);
  }
}
</style>
