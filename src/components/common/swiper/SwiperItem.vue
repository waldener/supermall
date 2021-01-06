<template>
    <div class="slide">
      <slot></slot>
    </div>
</template>

<script>
	export default {
		name: "Slide"
	}
</script>

<style scoped>
  .slide {
    width: 100%;

    /*使子元素（img）的width有效果*/
    flex-shrink: 0;
  }

  .slide img {
    width: 100%;
  }
</style>
