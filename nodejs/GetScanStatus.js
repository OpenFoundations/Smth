var Client = require('node-rest-client').Client;
var fs = require("fs")

var client = new Client();

var Target = 'http://www.ynet.co.il';
var Profile = './fast_scan.pw3af';


function getProfile() {
	data = fs.readFileSync(Profile, 'utf8')
	return data;
};

var profile = getProfile();
var json = {'scan_profile': profile,  
	"target_urls": [Target]
	};

client.get("http://localhost:5000/scans/0/status", function (data, response) {
	console.log(data.status);
	//console.log(response);
});

