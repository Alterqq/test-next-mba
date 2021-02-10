<div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider>
  <ul class="uk-slider-items uk-grid slider">
      {#each speakers as {name, prof, position, id, isTarget}}
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

  let speakers = [
    {
      id: 1,
      name: 'Дмитрий Пашустин',
      prof: 'Инструменты',
      position: 'Руководитель Digital-направления в «Газпром-Медиа»',
      isTarget: true
    },
    {
      id: 2,
      name: 'Сергей Купяков',
      prof: 'Логистика',
      position: 'Руководитель Digital-направления в «Газпром-Медиа»',
      isTarget: false
    },
    {
      id: 3,
      name: 'Артем Александров',
      prof: 'Инструменты',
      position: 'Руководитель Digital-направления в «Газпром-Медиа»',
      isTarget: false
    },
    {
      id: 4,
      name: 'Сергей Купяков',
      prof: 'Логистика',
      position: 'Руководитель Digital-направления в «Газпром-Медиа»',
      isTarget: false
    },
    {
      id: 5,
      name: 'Дмитрий Пашустин', prof: 'Инструменты', position: 'Руководитель Digital-направления в «Газпром-Медиа»',
      isTarget: false
    },
    {
      id: 6,
      name: 'Артем Александров',
      prof: 'Логистика',
      position: 'Руководитель Digital-направления в «Газпром-Медиа»',
      isTarget: false
    },
    {
      id: 7,
      name: 'Дмитрий Пашустин',
      prof: 'Инструменты',
      position: 'Руководитель Digital-направления в «Газпром-Медиа»',
      isTarget: false
    },
    {
      id: 8,
      name: 'Артем Александров',
      prof: 'Логистика',
      position: 'Руководитель Digital-направления в «Газпром-Медиа»',
      isTarget: false
    },
  ]

  const chooseHandler = (id) => {

    speakers = speakers.map(s => {
      return {...s, isTarget: false}
    }).map(s => {
      if (s.id === id.detail) return {...s, isTarget: true}
      return s
    })
    console.log(speakers)
  }
</script>
