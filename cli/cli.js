const trowler = require("../dist/trowler");
const prompts = require("prompts");

(async function() {
	const questions = [
	    {
	        type: "text",
	        name: "name",
	        message: "What's your new project name?"
	    },
	    {
	        type: "text",
	        name: "url",
	        message: "Which boilerplate do you want to use? (url or default name)"
	    }
	]

	const answers = await prompts(questions);

	trowler.name = answers.name
	trowler.url = answers.url
	try {
		trowler.generate().then(res => {
			console.log("Done!")
		}).catch(e => {
			console.log(`Oups! Something wrong happended. Here is the debug code:\n ${e}`)
		})
	} catch(e) {
		console.log(`Oups! Something wrong happended. Here is the debug code:\n ${e}`)
	}

})()
