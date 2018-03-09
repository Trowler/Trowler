customize() {
	const fs = require("fs");
	if (fs.existsSync(`${this.name}/_trowler.json`)) {
		const buff = fs.readFileSync(`${this.name}/_trowler.json`);
		const json = JSON.stringify(buff.toString("utf8"));
		const { execSync } = require("child_process");
		execSync(json.testCommand);
	}
}
