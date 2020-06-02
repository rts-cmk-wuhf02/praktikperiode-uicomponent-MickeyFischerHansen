import React from 'react';
import { cx, css } from "emotion";

const contentful = require('contentful')
const client = contentful.createClient({
  space: '0iwixb0qk3j2',
  environment: 'master', // defaults to 'master' if not set
  accessToken: 'XFINh5Fd1MHhlkhorlpcf1zhW1_Oi2ubDFKyzx6MVLc '
})
client.getEntry('61txJ6LyhC4qHyEpWDkQaw')
.then((entry) => {
  client.getAssets('1y1AJ0riO1ZWSICPvF5LbA')
  .then((asset) => {
      document.querySelector('#id').setAttribute("src", asset.items[0].fields.file.url)
      document.querySelector('#id').innerHTML = entry.fields.title
  }
  )
})
.catch(console.error)
const virker= () => (
  <div id="virk">
       <h1 id="id">HTML her</h1>
        </div>
)
export default virker;