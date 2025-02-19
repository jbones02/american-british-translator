const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
const translator = new Translator();

suite('Unit Tests', () => {
    // Nothing to translate
    test('Translate "Mangoes are my favorite fruit." to British English', done => {
        const untranslatedText = 'Mangoes are my favorite fruit.';
        const translatedText = translator.americanToBritish(untranslatedText);
        const correctTranslatedText = 'Mangoes are my <span class="highlight">favourite</span> fruit.';
        assert.equal(translatedText, correctTranslatedText);
        done();
    });

    // Spelling
    test('Translate "I ate yogurt for breakfast." to British English', done => {
        const untranslatedText = 'I ate yogurt for breakfast.';
        const translatedText = translator.americanToBritish(untranslatedText);
        const correctTranslatedText = 'I ate <span class="highlight">yoghurt</span> for breakfast.';
        assert.equal(translatedText, correctTranslatedText);
        done();
    });

    // Word
    test(`Translate "We had a party at my friend's condo." to British English`, done => {
        const untranslatedText = `We had a party at my friend's condo.`;
        const translatedText = translator.americanToBritish(untranslatedText);
        const correctTranslatedText = `We had a party at my friend's <span class="highlight">flat</span>.`;
        assert.equal(translatedText, correctTranslatedText);
        done();
    });

    // Word
    test('Translate "Can you toss this in the trashcan for me?" to British English', done => {
        const untranslatedText = 'Can you toss this in the trashcan for me?';
        const translatedText = translator.americanToBritish(untranslatedText);
        const correctTranslatedText = `Can you toss this in the <span class="highlight">bin</span> for me?`;
        assert.equal(translatedText, correctTranslatedText);
        done();
    });

    // Phrase
    test('Translate "The parking lot was full." to British English', done => {
        const untranslatedText = 'The parking lot was full.';
        const translatedText = translator.americanToBritish(untranslatedText);
        const correctTranslatedText = 'The <span class="highlight">car park</span> was full.';
        assert.equal(translatedText, correctTranslatedText);
        done();
    });

    // Phrase
    test('Translate "Like a high tech Rube Goldberg machine." to British English', done => {
        const untranslatedText = 'Like a high tech Rube Goldberg machine.';
        const translatedText = translator.americanToBritish(untranslatedText);
        const correctTranslatedText = 'Like a high tech <span class="highlight">Heath Robinson device</span>.';
        assert.equal(translatedText, correctTranslatedText);
        done();
    });

    // Phrase
    test('Translate "To play hooky means to skip class or work." to British English', done => {
        const untranslatedText = 'To play hooky means to skip class or work.';
        const translatedText = translator.americanToBritish(untranslatedText);
        const correctTranslatedText = 'To <span class="highlight">bunk off</span> means to skip class or work.';
        assert.equal(translatedText, correctTranslatedText);
        done();
    });

    // Title
    test('Translate "No Mr. Bond, I expect you to die." to British English', done => {
        const untranslatedText = 'No Mr. Bond, I expect you to die.';
        const translatedText = translator.americanToBritish(untranslatedText);
        const correctTranslatedText = 'No <span class="highlight">Mr</span> Bond, I expect you to die.';
        assert.equal(translatedText, correctTranslatedText);
        done();
    });

    // Title
    test('Translate "Dr. Grosh will see you now." to British English', done => {
        const untranslatedText = 'Dr. Grosh will see you now.';
        const translatedText = translator.americanToBritish(untranslatedText);
        const correctTranslatedText = '<span class="highlight">Dr</span> Grosh will see you now.'
        assert.equal(translatedText, correctTranslatedText);
        done();
    });

    // Time
    test('Translate "Lunch is at 12:15 today." to British English', done => {
        const untranslatedText = 'Lunch is at 12:15 today.'
        const translatedText = translator.americanToBritish(untranslatedText);
        const correctTranslatedText = 'Lunch is at <span class="highlight">12.15</span> today.'
        assert.equal(translatedText, correctTranslatedText);
        done();
    });

    // Word
    test('Translate "We watched the footie match for a while." to American English', done => {
        const untranslatedText = 'We watched the footie match for a while.'
        const translatedText = translator.britishToAmerican(untranslatedText);
        const correctTranslatedText = 'We watched the <span class="highlight">soccer</span> match for a while.'
        assert.equal(translatedText, correctTranslatedText);
        done();
    });
    
    // Word
    test('Translate "Paracetamol takes up to an hour to work." to American English', done => {
        const untranslatedText = 'Paracetamol takes up to an hour to work.';
        const translatedText = translator.britishToAmerican(untranslatedText);
        const correctTranslatedText = '<span class="highlight">Tylenol</span> takes up to an hour to work.';
        assert.equal(translatedText, correctTranslatedText);
        done();
    });

    // Word
    test('Translate "First, caramelise the onions." to American English', done => {
        const untranslatedText = 'First, caramelise the onions.';
        const translatedText = translator.britishToAmerican(untranslatedText);
        const correctTranslatedText = 'First, <span class="highlight">caramelize</span> the onions.';
        assert.equal(translatedText, correctTranslatedText);
        done();
    });

    // Phrase
    test('Translate "I spent the bank holiday at the funfair." to American English', done => {
        const untranslatedText = 'I spent the bank holiday at the funfair.';
        const translatedText = translator.britishToAmerican(untranslatedText);
        const correctTranslatedText = 'I spent the <span class="highlight">public holiday</span> at the <span class="highlight">carnival</span>.';
        assert.equal(translatedText, correctTranslatedText);
        done();
    });

    // Word
    test('Translate "I had a bicky then went to the chippy." to American English', done => {
        const untranslatedText = 'I had a bicky then went to the chippy.';
        const translatedText = translator.britishToAmerican(untranslatedText);
        const correctTranslatedText = 'I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-chip shop</span>.';
        assert.equal(translatedText, correctTranslatedText);
        done();
    });

    // Phrase
    test(`Translate "I've just got bits and bobs in my bum bag." to American English`, done => {
        const untranslatedText = `I've just got bits and bobs in my bum bag.`;
        const translatedText = translator.britishToAmerican(untranslatedText);
        const correctTranslatedText = `I've just got <span class="highlight">odds and ends</span> in my <span class="highlight">fanny pack</span>.`;
        assert.equal(translatedText, correctTranslatedText);
        done();
    });

    // Phrase
    test('Translate "The car boot sale at Boxted Airfield was called off." to American English', done => {
        const untranslatedText = 'The car boot sale at Boxted Airfield was called off.';
        const translatedText = translator.britishToAmerican(untranslatedText);
        const correctTranslatedText = 'The <span class="highlight">swap meet</span> at Boxted Airfield was called off.';
        assert.equal(translatedText, correctTranslatedText);
        done();
    });

    // Title
    test('Translate "Have you met Mrs Kalyani?" to American English', done => {
        const untranslatedText = 'Have you met Mrs Kalyani?';
        const translatedText = translator.britishToAmerican(untranslatedText);
        const correctTranslatedText = 'Have you met <span class="highlight">Mrs.</span> Kalyani?';
        assert.equal(translatedText, correctTranslatedText);
        done();
    });

    // Title
    test(`Translate "Prof Joyner of King's College, London." to American English`, done => {
        const untranslatedText = `Prof Joyner of King's College, London.`;
        const translatedText = translator.britishToAmerican(untranslatedText);
        const correctTranslatedText = `<span class="highlight">Prof.</span> Joyner of King's College, London.`
        assert.equal(translatedText, correctTranslatedText);
        done();
    });

    // Time
    test('Translate "Tea time is usually around 4 or 4.30." to American English', done => {
        const untranslatedText = 'Translate "Tea time is usually around 4 or 4.30.';
        const translatedText = translator.britishToAmerican(untranslatedText);
        const correctTranslatedText = 'Translate "Tea time is usually around 4 or <span class="highlight">4:30</span>.';
        assert.equal(translatedText, correctTranslatedText);
        done();
    });

    // Word
    test('Highlight translation in "Mangoes are my favorite fruit."', done => {
        const untranslatedText = 'Mangoes are my favorite fruit.';
        const translatedText = translator.americanToBritish(untranslatedText);
        assert.include(translatedText, '<span class="highlight">favourite</span>');
        done();
    });

    // Word
    test('Highlight translation in "I ate yogurt for breakfast."', done => {
        const untranslatedText = 'I ate yogurt for breakfast.';
        const translatedText = translator.americanToBritish(untranslatedText);
        assert.include(translatedText, '<span class="highlight">yoghurt</span>');
        done();
    });

    // Word
    test('Highlight translation in "We watched the footie match for a while."', done => {
        const untranslatedText = 'We watched the footie match for a while.';
        const translatedText = translator.britishToAmerican(untranslatedText);
        assert.include(translatedText, '<span class="highlight">soccer</span>');
        done();
    });

    // Word
    test('Highlight translation in "Paracetamol takes up to an hour to work."', done => {
        const untranslatedText = 'Paracetamol takes up to an hour to work.';
        const translatedText = translator.britishToAmerican(untranslatedText);
        assert.include(translatedText, '<span class="highlight">Tylenol</span>');
        done();
    });
});
