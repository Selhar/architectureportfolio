import React from 'react'
import Gallery from 'react-grid-gallery';

const Images = [{
  src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
  thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
  thumbnailWidth: 500,
  thumbnailHeight: 500,
},

{
  src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
  thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
  thumbnailWidth: 111,
  thumbnailHeight: 222,
},
{
  src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
  thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
  thumbnailWidth: 400,
  thumbnailHeight: 202,
},
{
  src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
  thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
  thumbnailWidth: 320,
  thumbnailHeight: 212,
},
{
  src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
  thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
  thumbnailWidth: 320,
  thumbnailHeight: 212,
},
{
  src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
  thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
  thumbnailWidth: 320,
  thumbnailHeight: 212,
},
{
  src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
  thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
  thumbnailWidth: 320,
  thumbnailHeight: 212,
},
{
  src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
  thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
  thumbnailWidth: 320,
  thumbnailHeight: 212,
},
{
  src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
  thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
  thumbnailWidth: 320,
  thumbnailHeight: 212,
},
{
  src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
  thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
  thumbnailWidth: 320,
  thumbnailHeight: 212,
},
{
  src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
  thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
  thumbnailWidth: 500,
  thumbnailHeight: 500,
},
{
  src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
  thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
  thumbnailWidth: 320,
  thumbnailHeight: 212,
},

{
  src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
  thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
  thumbnailWidth: 320,
  thumbnailHeight: 212
}]

export default () => (
  <div id='portfolio'>
    <Gallery images={Images} enableImageSelection={false}/>
  </div>
)

