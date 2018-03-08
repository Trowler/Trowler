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
