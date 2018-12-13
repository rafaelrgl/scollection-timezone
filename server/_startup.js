Meteor.startup(function () {
	if (SCollection.TimeZones.find({}).count() < 1) {
		SCollection.TimeZones._ensureIndex({ "name": 1});
		var docs = JSON.parse(Assets.getText('private/scollection-timezones.json'));
		var total = docs.length;
		var count = 0;
		docs.forEach(doc => {
			count = count + 1;
			console.log(`Importing scollection timezones ${count} of ${total}`)
			SCollection.TimeZones.insert(doc);
		});
	}
});

SCollectionApi = new Restivus({
	apiPath: 'scollection/',
	version: 'timezones',
	defaultHeaders: {
		'Content-Type': 'application/json'
	},
	useDefaultAuth: false,
	prettyJson: false,
	enableCors: true
});
