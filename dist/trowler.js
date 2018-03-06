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