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
