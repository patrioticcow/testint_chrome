var config = {
	apiKey: "AIzaSyCzXX7tuoCb52WKW9iv7N0YbDJEkqakc68",
	authDomain: "dark-gateway-630.firebaseapp.com",
	databaseURL: "https://dark-gateway-630.firebaseio.com",
	storageBucket: ""
};
firebase.initializeApp(config);

var ref = firebase.database().ref();

ref.on('child_added', function(data) {
	console.log(data);
});
