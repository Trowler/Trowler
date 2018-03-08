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
