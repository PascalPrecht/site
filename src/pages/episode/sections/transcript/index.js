import React from 'react'

export default Transcript

function Transcript({transcriptHTML}) {
  if (!transcriptHTML) {
    return <noscript />
  } else {
    return (
      <section id="transcript">
        <h3 className="+margin-bottom-large">Transcript</h3>
        <div dangerouslySetInnerHTML={transcriptHTML}></div>
      </section>
    )
  }
}
