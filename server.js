const osmosis = require('osmosis');

const searchByImage = (url, callback) => {
    let results = [];
    await osmosis
        .get('https://www.google.com/searchbyimage?image_url=' + encodeURIComponent(url))
        .set([
            osmosis
                .find('div:nth-child(4) > div > div > div > div > div.r > a')
                .set({
                    header: 'h3',
                    link: '@href',
                })
                .data((site) => {
                    site.header = site.header.replace(/[^\w\s]/gi, '');
                })
        ])
        .data(function (listing) {
      callBack(listing)
        })
}

module.exports = searchByImage;
