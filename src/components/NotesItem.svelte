<li class:uk-open={id === 2}>
  <a class="uk-accordion-title title" href="#">{title}
    <img class="download" src="./assets/download.svg" alt="">
  </a>
  <div class="uk-accordion-content content">
    <p>{content}</p>
  </div>
</li>


<script>
  export let id
  export let title
  export let content
</script>

<style lang="scss">
  .download {
    height: 14px;
    margin-left: 10px;
  }

  .content {
    margin-top: 10px;
    font-size: 14px;
  }

  .title {
    color: #E7534E;
    font: {
      size: 14px;
      weight: bold;
    }

    &:before {
      display: none;
    }
  }

  li {
    position: relative;
    color: white;
  }

  li:last-child {
    margin-top: 7px;
  }

</style>
