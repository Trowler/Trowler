validate() {
    // URL
    function exists(url) {
		new Promise((resolve, reject) => {
			const http = require("http");
	        const url = require("url");

	        const options = {
	            method: "HEAD",
	            host: url.parse(url).host,
	            port: 80,
	            path: url.parse(url).pathname
	        }

	        const req = http.request(options, r => {
	            resolve(r.statusCode == 200);
	        })
			req.end()
		});
    }
	const url = exists(this.url).then(data => data)

	// NAME
	const fs = require("fs");
	const name = fs.existsSync(this.name);
	return url && name;
}
