//Require all dictionaries in the source files
const americanOnly = require("./american-only.js");
const americanToBritishSpelling = require("./american-to-british-spelling.js");
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require("./british-only.js");

class Translator {
	//Use the constructor function to improve performance when creating a new translator
	constructor() {
		this.americanOnly = americanOnly;
		this.americanToBritishSpelling = americanToBritishSpelling;
		this.americanToBritishTitles = americanToBritishTitles;
		this.britishOnly = britishOnly;

		this.britishToAmericanSpelling = this.invertDictionary(
			americanToBritishSpelling
		);
		this.britishToAmericanTitles = this.invertDictionary(
			americanToBritishTitles
		);
	}

	//Invert dictionary function for when translating from British english to American english
	invertDictionary(dictionary) {
		//Takes all the entries from the object and reverses them into a new dictionary
		return Object.fromEntries(
			Object.entries(dictionary).map(([key, value]) => [value, key])
		);
	}

	//Capitalize the first letter of the given string
	capitalizeFirstLetter(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

	//Takes in the text and the locale from the api and translates it accordingly
	translate(text, locale) {
		//Checks for missing or invalid fields
		if (!locale || text === undefined)
			return { error: "Required field(s) missing" };
		if (text === "") return { error: "No text to translate" };
		if (locale !== "american-to-british" && locale !== "british-to-american") {
			return { error: "Invalid value for locale field" };
		}

		// Initialize the translated text to the input text
		let translatedText = text;

		// Apply the dictionaries to the translated text based on the locale provided
		const dictionaries =
			locale === "american-to-british"
				? [
						this.americanOnly,
						this.americanToBritishSpelling,
						this.americanToBritishTitles,
				  ]
				: [
						this.britishOnly,
						this.britishToAmericanSpelling,
						this.britishToAmericanTitles,
				  ];

		// Apply the dictionaries to the translated text in order of their length (longest to shortest)
		// This ensures that more specific translations take precedence over less specific ones,
		dictionaries.forEach((dictionary) => {
			translatedText = this.applyDictionary(translatedText, dictionary);
		});

		// Translate any remaining numbers and dates to their respective equivalents
		translatedText = this.translateTime(translatedText, locale);
		//check if any translation has been made, if not, return with no changes to the text,
		//if there has, return the original text and the newly translated text
		if (translatedText === text) {
			return { text, translation: "Everything looks good to me!" };
		}
		return { text, translation: translatedText };
	}

	applyDictionary(text, dictionary) {
		// Loop through all the keys in the dictionary in descending order of length
		// This ensures that more specific translations take precedence over less specific ones
		const sortedKeys = Object.keys(dictionary).sort(
			(a, b) => b.length - a.length
		);
		sortedKeys.forEach((key) => {
			// Check if the current key is present in the text and replace it with its corresponding value
			// Wrap the matched text in a span with a class of "highlight" for styling purposes
			const escapedKey = key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
			const regex = new RegExp(`\\b${escapedKey}(?!\\w)`, "gi");
			text = text.replace(regex, (match) => {
				let replacement = dictionary[key];
				if (match[0].toUpperCase() === match[0]) {
					replacement = this.capitalizeFirstLetter(replacement);
				}
				return `<span class="highlight">${replacement}</span>`;
			});
		});
		return text;
	}

	translateTime(text, locale) {
		// Replace time formats in the text with their respective equivalents in the given locale
		const timeRegex =
			locale === "american-to-british"
				? /(\d{1,2}):(\d{2})/g
				: /(\d{1,2})\.(\d{2})/g;
		const timeReplacement =
			locale === "american-to-british" ? "$1.$2" : "$1:$2";

		return text.replace(
			timeRegex,
			(match) =>
				`<span class="highlight">${match.replace(
					timeRegex,
					timeReplacement
				)}</span>`
		);
	}
}

module.exports = Translator;
