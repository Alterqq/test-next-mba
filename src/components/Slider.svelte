<div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider>
  <ul class="uk-slider-items uk-grid slider">
      {#each cards as {name, prof, position, id, isTarget}}
        <Card on:choose={chooseHandler} {name} {prof} {position} {id} {isTarget}/>
      {/each}
  </ul>
  <span class="material-icons uk-position-center-left prev" uk-slider-item="previous">arrow_left</span>
  <span class="material-icons uk-position-center-right next" uk-slider-item="next">arrow_right</span>

</div>


<style lang="scss">
  .slider {
    margin: auto 5%;
    padding: 50px 0;
  }

  .prev, .next {
    font-size: 80px;

    cursor: pointer;

    &:before {
      position: absolute;
      content: "";
      box-shadow: 0 0 80px 31px #fff;
      top: 39px;
      left: 30px;
    }
  }

  .prev {
    left: -15px;
  }

  .next {
    right: -15px;
  }
</style>

<script>
  import Card from './SpeakerCard.svelte';
  import {speakers} from '../stores'

  let cards

  speakers.subscribe(v => cards = v)

  const chooseHandler = (id) => {

    speakers.set(cards.map(s => {
      return {...s, isTarget: false}
    }).map(s => {
      if (s.id === id.detail) return {...s, isTarget: true}
      return s
    }))
  }
</script>
