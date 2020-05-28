const osmosis = require('osmosis');

const searchByImage = (url, callBack) => {
    osmosis
    .get('https://www.google.com/searchbyimage?image_url=' + encodeURIComponent(url))
    .find('div:nth-child(4) > div > div > div > div > div.r > a')
    .set({
      url: '@href',
      title: 'h3'
    })
    .data(function (listing) {
      callBack(listing)
    })
}

module.exports = searchByImage;
