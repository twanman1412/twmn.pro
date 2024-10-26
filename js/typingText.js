const texts = [
	"am still working on finishing this website",
	/*
	"do Web Development",
	"do Embedded Systems",
	*/
];

const preText = "And I ";
const cursor = "|";

let typingTextP;

document.addEventListener("DOMContentLoaded", _ => {

	typingTextP = document.querySelector("p#typing-text");
	typingText();
});

async function typingText() {

	while (true) {

		typingTextP.innerHTML = cursor;

		for (const str of texts) {

			for (let i = 0; i <= str.length; i++) {
				typingTextP.innerHTML = preText + str.substring(0, i) + cursor;
				await sleep(150);
			}

			await sleep(1000);

			for (let i = str.length; i >= 0; i--) {
				typingTextP.innerHTML = preText + str.substring(0, i) + cursor;
				await sleep(100);
			}
		}

		await sleep(750);
	}
}

async function sleep(millis) {

	await new Promise(r => setTimeout(r, millis));
}
