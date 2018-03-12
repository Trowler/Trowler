// Test made using EyeJS - https://eye.js.org

const path = require('path').normalize(__testDir + "/../")

const trowler = require(path + "dist/trowler");

const fs = require(path + "node_modules/fs-extra/lib/index");

eye.test("Assigning values", "node",
	$ => $(() => {
		trowler.name = "website"
		trowler.url = "trowler/jekyll"
	}).toRun()
)
eye.test("Generation", "node",
	$ => $(() => {
		trowler.generate().then(res => {
			fs.removeSync(path + "website") // never put a path without 'path +' because it might delete your entire computer.
		})
	}).toRun()
)
