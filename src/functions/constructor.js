constructor(name, url) {
	this.name = name;
	if (/github.com/.test(url)) {
		this.url = url;
	} else {
		this.url = `https://github.com/${url}`;
	}
}
