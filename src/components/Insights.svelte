<div class="insights">
  <div class="uk-child-width-1-5@m uk-grid-small uk-grid-match" uk-grid>
      {#each ins as {id, timeCode, name, date, note}}
        <div>
          <div class="uk-card uk-card-secondary card">
            <div class="title">

              <div class="play">
                <span on:click={() => onChangeTimeCode(getSeconds(timeCode))}
                      class="material-icons play-btn">play_circle
                </span>
                <span class="time-code">{timeCode}</span>
              </div>
              <div class="title-info">
                <h5>{name}</h5>
                <span>{getShortDate(date)}</span>
              </div>
            </div>
            <p>{note}</p>
          </div>
        </div>
      {/each}
  </div>
</div>

<script>
  import {insights} from '../stores';
  import {getSeconds} from '../utils';
  import {getShortDate} from '../utils';
  import {video} from '../stores';

  const onChangeTimeCode = (t) => {
    $video.currentTime = t
  }
  let ins

  insights.subscribe(val => {
    ins = val
  })

</script>

<style lang="scss">
  .insights {
    padding-top: 30px;

    .card {
      min-height: 180px;
      border-radius: 6px;
      padding: 6px;
      position: relative;

      &:before, &:after {
        content: '';
        position: absolute;
        width: 0;
        height: 0;
        border: 13px solid;
        border-color: transparent transparent #649CCE #649CCE;
        border-radius: 5px;
        right: -1px;
        top: -1px;
      }

      &:after {
        border-color: #000 #000 transparent transparent;
      }

      .title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 12px;

        span {
          font-size: 10px;
        }

        .play {
          display: flex;
          align-items: center;
          gap: 7px;

          .play-btn {
            font-size: 29px;
            cursor: pointer;
          }
        }

        .title-info {
          display: flex;
          align-items: center;
          gap: 5px;
          margin-right: 25px;
          flex-wrap: wrap;

          h5 {
            font-size: 10px;
            margin: 0 0 1px;
          }
        }
      }

      p {
        font-size: 14px;
        margin: 0;
      }
    }
  }
</style>
