<div class="video">
  <div class="player">
      {#if playMode === false}
        <span on:click={onPlay} class="material-icons play">play_circle_outline</span>
      {:else}
        <span on:click={onPause} class="material-icons pause">pause_circle_outline</span>
      {/if}
    <video
        on:loadedmetadata={onLoadMetaData}
        on:timeupdate={onTimeUpdate}
        bind:this={player}
        src={video}
        uk-video="autoplay: false"
        on:loadstart={player.volume = 0.1}
    ></video>
      {#if playMode === false}
        <textarea on:keyup={addInsight} placeholder="Тут можно вводить текст" bind:value={note}></textarea>
      {/if}
  </div>
  <div class="progress">
    <span class="start">0:00</span>
    <progress on:click={onRewind} value="0" max="100" bind:this={progress} class="uk-progress"></progress>
    <span class="end">{duration}</span>
  </div>

</div>

<script>
  import video from '../../public/assets/video.mp4'
  import UIkit from 'uikit';
  import {insights} from '../stores';
  import {getDuration} from '../utils';

  let note = ''
  let player
  let progress
  let playMode = false
  let timeCode
  let duration

  const onLoadMetaData = () => {
    duration = getDuration(player.duration)
  }

  const addInsight = (event) => {
    if (event.key === 'Enter' && event.target.value.trim() !== '') {
      insights.set([...$insights, {id: Date.now(), timeCode, name: 'Имя', date: new Date(), note}])
      note = ''
    }
  }

  const onPlay = () => {
    player.play()
    playMode = true
  }

  const onPause = () => {
    player.pause()
    playMode = false
  }

  const onTimeUpdate = () => {
    UIkit.util.ready(function () {
      progress.value = 100 * player.currentTime / player.duration
      const date = new Date(null);
      date.setSeconds(player.currentTime)
      timeCode = date.toISOString().substr(14, 5);
    })
    if (player.ended) {
      playMode = false
    }
  }

  const onRewind = (event) => {
    const offset = event.offsetX
    const width = progress.offsetWidth
    progress.value = 100 * offset / width
    player.pause()
    player.currentTime = player.duration * (offset / width)
    playMode = true
    player.play()
  }
</script>

<style lang="scss">
  @import "../styles/variables";

  .video {
    margin: auto 5% 100px;

    .player {
      position: relative;

      textarea {
        position: absolute;
        bottom: 10%;
        right: 25%;
        left: 25%;
        resize: none;
        width: 50%;
        height: 30%;
        outline: none;
        padding: 15px;
        font-size: 20px;
        opacity: 0.6;
        border-radius: 12px;
        animation: textarea 500ms;
      }

      .pause {
        opacity: 0;
        transition-duration: 500ms;
      }

      .pause:hover {
        opacity: 1;
        transition-duration: 500ms;
      }

      .pause, .play {
        cursor: pointer;
        z-index: 2;
        position: absolute;
        background-color: transparent;
        font-size: 100px;
        top: 42%;
        right: 49%;
      }

      video {
        max-height: 100%;
      }
    }

    .progress {
      position: relative;

      .start {
        position: absolute;
        left: -37px;
        bottom: -24px;
      }

      .end {
        position: absolute;
        right: -37px;
        bottom: -24px;
      }

      progress {
        cursor: pointer;
        margin-top: 5px;

        &[value]::-webkit-progress-value {
          background: $orange;
        }
      }
    }


  }

  @keyframes textarea {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 0.6;
    }
  }
</style>
