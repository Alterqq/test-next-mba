<div class="card" on:click={() => chooseCard(id)}>
  <span class:active-card={isTarget}></span>
  <h3>{name}</h3>
  <span class:active-check={isTarget} class="material-icons check">check</span>
  <span>{prof}</span>
  <p>{position}</p>

</div>

<script>
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()
  export let name = 'Имя'
  export let prof = 'Направление'
  export let position = 'Должность'
  export let id
  export let isTarget

  const chooseCard = (id) => {
    dispatch('choose', id)
  }

</script>

<style lang="scss">
  .active-card {
    position: absolute;
    border: 1px solid #E7534E;
    border-radius: 10px;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  .card {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
    width: 230px;
    border-radius: 10px;
    background-color: #222;
    margin-right: 10px;
    position: relative;
    cursor: pointer;

    .check {
      position: absolute;
      right: 8px;
      top: 8px;
      background-color: #E7534E;
      background-color: gray;
      border-radius: 50%;
      width: 20px;
      height: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }

    .active-check {
      background-color: #E7534E;
    }

    h3 {
      margin: 0;
      color: white;
      font-size: 15px;
    }

    span {
      font-size: 15px;
    }

    p {
      font-size: 13px;
      margin-top: 7px;
    }
  }
</style>


