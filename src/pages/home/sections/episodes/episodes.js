import React from 'react'
import Episode from './episode'

import * as utils from '../../../../../shared/utils'


export default EpisodesSection

function EpisodesSection({episodes = []}) {
  return (
    <section id="episodes">
      <h2>Upcoming Episodes</h2>
      <div className="episodes">
        {
          utils.intersperse(
            episodes
              .sort(utils.sortEpisodes)
              .map((e, i) => <Episode episodeData={e} key={i} index={i} />),
            (e, i) => <hr key={`hr${i}`} className="episode-separator" />
          )
        }
      </div>
    </section>
  )
}
