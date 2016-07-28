var Client = require('node-rest-client').Client;

var client = new Client();

var Target = 'http://www.ynet.co.il';
var Profile = './fast_scan.pw3af';


var fs = require("fs")
function getProfile() {
	data = fs.readFileSync(Profile, 'utf8')
	return data;
};

var profile = getProfile();
var json = {'scan_profile': profile,  
	"target_urls": [Target]};
var args = {
    'data': json ,
    'headers': { "Content-Type": "application/json" }
};
client.get("http://localhost:5000/scans/0/kb/", function (data, response) {
	console.log(JSON.stringify(data, null, 4));
	//console.log(response);
});

