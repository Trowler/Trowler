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
		if (/github.com/.test(url)) {
			this.url = url;
		} else {
			this.url = `https://github.com/${url}`;
		}
	}
	generate() {
		if (/github.com/.test(this.url)) {
			this.url = this.url;
		} else {
			this.url = `https://github.com/${this.url}`;
		}
		console.log(this.url)
		return new Promise((resolve, reject) => {
			this.validate().then(valid => {
				if(valid) {
					this.clone(this.url, this.name).then(result => resolve(result));
				} else {
					reject("Wrong parameters,\nthe folder name might already exist, or you gived a wrong generator.");
				}
			})
		});
	}
	validate() {
	    return new Promise((resolve, reject) => {
	        // URL
	        function exists(URL, callback) {
	            const request = require("request")
	            request({
	                url: URL,
	                method: 'HEAD'
	            }, (err, res) => {
	                if (err) return callback(false);
	                callback(/4\d\d/.test(res.statusCode) === false)
	            })
	        }
	
	        function existsPromise(url) {
	            return new Promise(function(resolve, reject) {
	                exists(url, r => {
	                    resolve(r)
	                })
	            });
	        }
	        existsPromise(this.url).then(url => {
	            // NAME
	            const fs = require("fs");
	            const name = fs.existsSync(`${process.cwd()}/${this.name}`);
	            resolve(url && !name)
	        });
	    })
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