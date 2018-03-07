/*============================*

	Copyright © 2018 Arthur Guiot. All right reserved.

 *============================*/



class Trowler {
	clone(url, name) {
		const { spawn } = require("child_process");
		return new Promise((resolve, reject) => {
			const git = spawn("git", ["clone", url, name])
			git.on( 'close', code => {
				if (code == 0) {
					resolve(name)
				} else {
					reject(`Error while cloning, here is the code: ${code}`)
				}
			})
		});
	}
	constructor(name, url) {
		this.name = name;
		this.url = url;
	}
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
}
// Browserify / Node.js
if (typeof define === "function" && define.amd) {
  define(() => new Trowler());
  // CommonJS and Node.js module support.
} else if (typeof exports !== "undefined") {
  // Support Node.js specific `module.exports` (which can be a function)
  if (typeof module !== "undefined" && module.exports) {
    exports = module.exports = new Trowler();
  }
  // But always support CommonJS module 1.1.1 spec (`exports` cannot be a function)
  exports.Trowler = new Trowler();
} else if (typeof global !== "undefined") {
  global.Trowler = new Trowler();
}