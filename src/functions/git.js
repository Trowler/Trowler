git() {
	const { execSync } = require("child_process");
	if (!/^win/.test(process.platform)) {
		execSync(`cd ${this.name} && rm -rf .git && git init`);
	} else {
		console.log("[Trowler] Please delete '.git' folder in your new project folder, and run 'git init'")
	}
}
