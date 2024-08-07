const chai = require("chai");
const assert = chai.assert;

const Translator = require("../components/translator.js");

suite("Unit Tests", () => {
	const translator = new Translator();

	test('Translate "Mangoes are my favorite fruit." to British English', () => {
		const input = {
			text: "Mangoes are my favorite fruit.",
			locale: "american-to-british",
		};
		const expected = {
			text: "Mangoes are my favorite fruit.",
			translation:
				'Mangoes are my <span class="highlight">favourite</span> fruit.',
		};
		const result = translator.translate(input.text, input.locale);
		assert.deepEqual(result, expected);
	});

	test('Translate "I ate yogurt for breakfast." to British English', () => {
		const input = {
			text: "I ate yogurt for breakfast.",
			locale: "american-to-british",
		};
		const expected = {
			text: "I ate yogurt for breakfast.",
			translation:
				'I ate <span class="highlight">yoghurt</span> for breakfast.',
		};
		const result = translator.translate(input.text, input.locale);
		assert.deepEqual(result, expected);
	});

	test('Translate "We had a party at my friend\'s condo." to British English', () => {
		const input = {
			text: "We had a party at my friend's condo.",
			locale: "american-to-british",
		};
		const expected = {
			text: "We had a party at my friend's condo.",
			translation:
				'We had a party at my friend\'s <span class="highlight">flat</span>.',
		};
		const result = translator.translate(input.text, input.locale);
		assert.deepEqual(result, expected);
	});
	test('Translate "Can you toss this in the trashcan for me?" to British English', () => {
		const input = {
			text: "Can you toss this in the trashcan for me?",
			locale: "american-to-british",
		};
		const expected = {
			text: "Can you toss this in the trashcan for me?",
			translation:
				'Can you toss this in the <span class="highlight">bin</span> for me?',
		};
		const result = translator.translate(input.text, input.locale);
		assert.deepEqual(result, expected);
	});

	test('Translate "The parking lot was full." to British English', () => {
		const input = {
			text: "The parking lot was full.",
			locale: "american-to-british",
		};
		const expected = {
			text: "The parking lot was full.",
			translation: 'The <span class="highlight">car park</span> was full.',
		};
		const result = translator.translate(input.text, input.locale);
		assert.deepEqual(result, expected);
	});

	test('Translate "Like a high tech Rube Goldberg machine." to British English', () => {
		const input = {
			text: "Like a high tech Rube Goldberg machine.",
			locale: "american-to-british",
		};
		const expected = {
			text: "Like a high tech Rube Goldberg machine.",
			translation:
				'Like a high tech <span class="highlight">Heath Robinson device</span>.',
		};
		const result = translator.translate(input.text, input.locale);
		assert.deepEqual(result, expected);
	});

	test('Translate "To play hooky means to skip class or work." to British English', () => {
		const input = {
			text: "To play hooky means to skip class or work.",
			locale: "american-to-british",
		};
		const expected = {
			text: "To play hooky means to skip class or work.",
			translation:
				'To <span class="highlight">bunk off</span> means to skip class or work.',
		};
		const result = translator.translate(input.text, input.locale);
		assert.deepEqual(result, expected);
	});

	test('Translate "No Mr. Bond, I expect you to die." to British English', () => {
		const input = {
			text: "No Mr. Bond, I expect you to die.",
			locale: "american-to-british",
		};
		const expected = {
			text: "No Mr. Bond, I expect you to die.",
			translation:
				'No <span class="highlight">Mr</span> Bond, I expect you to die.',
		};
		const result = translator.translate(input.text, input.locale);
		assert.deepEqual(result, expected);
	});

	test('Translate "Dr. Grosh will see you now." to British English', () => {
		const input = {
			text: "Dr. Grosh will see you now.",
			locale: "american-to-british",
		};
		const expected = {
			text: "Dr. Grosh will see you now.",
			translation: '<span class="highlight">Dr</span> Grosh will see you now.',
		};
		const result = translator.translate(input.text, input.locale);
		assert.deepEqual(result, expected);
	});

	test('Translate "Lunch is at 12:15 today." to British English', () => {
		const input = {
			text: "Lunch is at 12:15 today.",
			locale: "american-to-british",
		};
		const expected = {
			text: "Lunch is at 12:15 today.",
			translation: 'Lunch is at <span class="highlight">12.15</span> today.',
		};
		const result = translator.translate(input.text, input.locale);
		assert.deepEqual(result, expected);
	});

	test('Translate "We watched the footie match for a while." to American English', () => {
		const input = {
			text: "We watched the footie match for a while.",
			locale: "british-to-american",
		};
		const expected = {
			text: "We watched the footie match for a while.",
			translation:
				'We watched the <span class="highlight">soccer</span> match for a while.',
		};
		const result = translator.translate(input.text, input.locale);
		assert.deepEqual(result, expected);
	});

	test('Translate "Paracetamol takes up to an hour to work." to American English', () => {
		const input = {
			text: "Paracetamol takes up to an hour to work.",
			locale: "british-to-american",
		};
		const expected = {
			text: "Paracetamol takes up to an hour to work.",
			translation:
				'<span class="highlight">Tylenol</span> takes up to an hour to work.',
		};
		const result = translator.translate(input.text, input.locale);
		assert.deepEqual(result, expected);
	});

	test('Translate "First, caramelise the onions." to American English', () => {
		const input = {
			text: "First, caramelise the onions.",
			locale: "british-to-american",
		};
		const expected = {
			text: "First, caramelise the onions.",
			translation:
				'First, <span class="highlight">caramelize</span> the onions.',
		};
		const result = translator.translate(input.text, input.locale);
		assert.deepEqual(result, expected);
	});

	test('Translate "I spent the bank holiday at the funfair." to American English', () => {
		const input = {
			text: "I spent the bank holiday at the funfair.",
			locale: "british-to-american",
		};
		const expected = {
			text: "I spent the bank holiday at the funfair.",
			translation:
				'I spent the <span class="highlight">public holiday</span> at the <span class="highlight">carnival</span>.',
		};
		const result = translator.translate(input.text, input.locale);
		assert.deepEqual(result, expected);
	});

	test('Translate "I had a bicky then went to the chippy." to American English', () => {
		const input = {
			text: "I had a bicky then went to the chippy.",
			locale: "british-to-american",
		};
		const expected = {
			text: "I had a bicky then went to the chippy.",
			translation:
				'I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-chip shop</span>.',
		};
		const result = translator.translate(input.text, input.locale);
		assert.deepEqual(result, expected);
	});

	test('Translate "I\'ve just got bits and bobs in my bum bag." to American English', () => {
		const input = {
			text: "I've just got bits and bobs in my bum bag.",
			locale: "british-to-american",
		};
		const expected = {
			text: "I've just got bits and bobs in my bum bag.",
			translation:
				'I\'ve just got <span class="highlight">odds and ends</span> in my <span class="highlight">fanny pack</span>.',
		};
		const result = translator.translate(input.text, input.locale);
		assert.deepEqual(result, expected);
	});

	test('Translate "The car boot sale at Boxted Airfield was called off." to American English', () => {
		const input = {
			text: "The car boot sale at Boxted Airfield was called off.",
			locale: "british-to-american",
		};
		const expected = {
			text: "The car boot sale at Boxted Airfield was called off.",
			translation:
				'The <span class="highlight">swap meet</span> at Boxted Airfield was called off.',
		};
		const result = translator.translate(input.text, input.locale);
		assert.deepEqual(result, expected);
	});

	test('Translate "Have you met Mrs Kalyani?" to American English', () => {
		const input = {
			text: "Have you met Mrs Kalyani?",
			locale: "british-to-american",
		};
		const expected = {
			text: "Have you met Mrs Kalyani?",
			translation: 'Have you met <span class="highlight">Mrs.</span> Kalyani?',
		};
		const result = translator.translate(input.text, input.locale);
		assert.deepEqual(result, expected);
	});

	test('Translate "Prof Joyner of King\'s College, London." to American English', () => {
		const input = {
			text: "Prof Joyner of King's College, London.",
			locale: "british-to-american",
		};
		const expected = {
			text: "Prof Joyner of King's College, London.",
			translation:
				'<span class="highlight">Prof.</span> Joyner of King\'s College, London.',
		};
		const result = translator.translate(input.text, input.locale);
		assert.deepEqual(result, expected);
	});

	test('Translate "Tea time is usually around 4 or 4.30." to American English', () => {
		const input = {
			text: "Tea time is usually around 4 or 4.30.",
			locale: "british-to-american",
		};
		const expected = {
			text: "Tea time is usually around 4 or 4.30.",
			translation:
				'Tea time is usually around 4 or <span class="highlight">4:30</span>.',
		};
		const result = translator.translate(input.text, input.locale);
		assert.deepEqual(result, expected);
	});

	test('Translate "Mangoes are my favorite fruit." to British English and check for the highlighted translation', () => {
		const input = {
			text: "Mangoes are my favorite fruit.",
			locale: "american-to-british",
		};
		const expected = {
			text: "Mangoes are my favorite fruit.",
			translation:
				'Mangoes are my <span class="highlight">favourite</span> fruit.',
		};
		const result = translator.translate(input.text, input.locale);
		assert.deepEqual(result, expected);
	});

	test('Translate "I ate yogurt for breakfast." to British English and check for the highlighted translation', () => {
		const input = {
			text: "I ate yogurt for breakfast.",
			locale: "american-to-british",
		};
		const expected = {
			text: "I ate yogurt for breakfast.",
			translation:
				'I ate <span class="highlight">yoghurt</span> for breakfast.',
		};
		const result = translator.translate(input.text, input.locale);
		assert.deepEqual(result, expected);
	});

	test('Translate "We watched the footie match for a while." to American English and check for the highlighted translation', () => {
		const input = {
			text: "We watched the footie match for a while.",
			locale: "british-to-american",
		};
		const expected = {
			text: "We watched the footie match for a while.",
			translation:
				'We watched the <span class="highlight">soccer</span> match for a while.',
		};
		const result = translator.translate(input.text, input.locale);
		assert.deepEqual(result, expected);
	});

	test('Translate "Paracetamol takes up to an hour to work." to American English and check for the highlighted translation', () => {
		const input = {
			text: "Paracetamol takes up to an hour to work.",
			locale: "british-to-american",
		};
		const expected = {
			text: "Paracetamol takes up to an hour to work.",
			translation:
				'<span class="highlight">Tylenol</span> takes up to an hour to work.',
		};
		const result = translator.translate(input.text, input.locale);
		assert.deepEqual(result, expected);
	});
});
