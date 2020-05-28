const osmosis = require('osmosis');

const searchByImage = async (url) => {
	let results = [];
	try {
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
			.data((sites) => {
				results = sites;
			});
		return results;
	} 
	catch (error) {
		throw new Error(400);
	}
}

module.exports = searchByImage;
