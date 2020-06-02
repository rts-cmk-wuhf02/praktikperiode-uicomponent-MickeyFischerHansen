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
      document.querySelector('#image').setAttribute("src", asset.items[0].fields.file.url)
      document.querySelector('#title').innerHTML = entry.fields.title
      document.querySelector('#paragraph').innerHTML = entry.fields.paragraph
      console.log(asset)
      
  }
  )
})
.catch(console.error)
const virker= () => (
  <div id="virk">
      <img id="image"></img>
       <h1 id="title">HTML her</h1>
       <p id="paragraph"></p>
       
        </div>
)
export default virker;