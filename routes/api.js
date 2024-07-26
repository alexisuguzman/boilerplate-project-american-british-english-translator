"use strict";

const Translator = require("../components/translator.js");

module.exports = function (app) {
	const translator = new Translator();

	app.route("/api/translate").post((req, res) => {
		const { text, locale } = req.body;

		const translation = translator.translate(text, locale);

		//Logs used to generate tests
		/*
		console.log(`test('Translate "${text}" to American English', () => {
      const input = { text: "${text}", locale: "${locale}" };
      const expected = {
        text: "${text}",
        translation: '${translation.translation}'
      };
      
      const result = translator.translate(input.text, input.locale);
      assert.deepEqual(result, expected);
      });
  
    `);
    */
		res.json(translation);
	});
};
