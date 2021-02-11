<li class:uk-open={id === 2}>
  <a class="uk-accordion-title title" href="#">{title}
    <img bind:this={link} on:click={() => downloadFile(content)} class="download" src="./assets/download.svg" alt="">
  </a>
  <div class="uk-accordion-content content">
    <p>{content}</p>
  </div>
</li>


<script>
  import { downloadFile } from '../utils'

  export let id
  export let title
  export let content
  let link


</script>

<style lang="scss">
  @import "../styles/variables";

  li {

  }

  .download {
    height: 14px;
    margin-left: 10px;
    cursor: pointer;
  }

  .content {
    margin-top: 10px;
    font-size: 14px;
  }

  .title {
    color: $orange;
    font: {
      size: 14px;
      weight: bold;
    }

    &:before {
      display: none;
    }
  }

  li:nth-child(n) {
    position: relative;
    color: white;
    margin-top: 7px;
  }


</style>
