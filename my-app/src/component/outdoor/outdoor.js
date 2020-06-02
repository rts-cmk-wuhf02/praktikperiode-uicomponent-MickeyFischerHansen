import React from 'react';
import { cx, css } from "emotion";

const contentful = require('contentful')
const client = contentful.createClient({
  space: '0iwixb0qk3j2',
  environment: 'master', // defaults to 'master' if not set
  accessToken: 'XFINh5Fd1MHhlkhorlpcf1zhW1_Oi2ubDFKyzx6MVLc '
})
client.getEntry('2MSjPj2eAN7yG0ystLJsHS')
.then((entry) => {
  client.getAssets('2bzjQP3jPk9mWPf8Rjh2FK')
  .then((asset) => {
      document.querySelector('#image2').setAttribute("src", asset.items[0].fields.file.url)
      document.querySelector('#title2').innerHTML = entry.fields.title
      document.querySelector('#paragraph2').innerHTML = entry.fields.paragraph
      console.log(asset)
  }
  )
})
.catch(console.error)
const virker= () => (
  <div id="virk2">
      <img id="image2"></img>
       <h1 id="title2">HTML her</h1>
       <p id="paragraph2"></p>
       
        </div>
)
export default virker;