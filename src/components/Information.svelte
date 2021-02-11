<div class="information">
  <span class:active-mode={mode === 'notes'} on:click={onNotesMode}>Конспект</span>
  <span class:active-mode={mode === 'insights'} on:click={onInsightsMode}>Инсайты</span>
    {#if mode === 'notes'}

      <ul uk-accordion>
          {#each notes as { id, title, content }}
            <AccordionItem {id} {title} {content}/>
          {/each}
      </ul>

    {:else}

     <Insights/>

    {/if}

</div>

<script>
  import AccordionItem from './NotesItem.svelte';
  import {MOCK_TEXT} from '../constants';
  import {infoMode} from '../stores';

  import Insights from './Insights.svelte';

  let mode



  infoMode.subscribe(value => {
    mode = value
  })

  const onNotesMode = () => {
    infoMode.set('notes')
  }

  const onInsightsMode = () => {
    infoMode.set('insights')
  }

  let notes = [
    {id: 1, title: 'Some title', content: MOCK_TEXT},
    {id: 2, title: 'Another title', content: MOCK_TEXT},
    {id: 3, title: 'Any title', content: MOCK_TEXT},
    {id: 4, title: 'title number four', content: MOCK_TEXT},
  ]

</script>

<style lang="scss">
  @import "../styles/variables";
  .information {
    margin: auto 5%;
    padding-bottom: 10px;

    .active-mode {
      color: $orange;
      border-bottom: 3px solid $orange;
    }

    span {
      padding: 7px 0 7px 0;
      cursor: pointer;
      margin-right: 7px;
      font: {
        size: 14px;
        weight: bold;
      }
      color: lightgray;
    }

  }

</style>
