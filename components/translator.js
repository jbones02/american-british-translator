const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require('./british-only.js');

class Translator {

    capitalizeFirstLetter(word) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }

    americanToBritish(text) {
        let translatedText = text;

        // Translate American only words
        Object.keys(americanOnly).forEach(word => {
            const regex = new RegExp(`\\b${word}\\b`, 'gi');
            translatedText = translatedText.replace(regex, `<span class="highlight">${americanOnly[word]}</span>`);
        });

        // Translate spellings
        Object.keys(americanToBritishSpelling).forEach(word => {
            const regex = new RegExp(`\\b${word}\\b`, 'gi');
            translatedText = translatedText.replace(regex, `<span class="highlight">${americanToBritishSpelling[word]}</span>`);
        });

        // Translate titles
        Object.keys(americanToBritishTitles).forEach(title => {
            const regex = new RegExp(`\\b${title}\\.?(?=\\s)`, 'gi'); // Match title with optional period
            translatedText = translatedText.replace(regex, (match) => {
                const formattedTitle = this.capitalizeFirstLetter(americanToBritishTitles[title]);
                return `<span class="highlight">${formattedTitle}</span>`;
            });
        });

        // Convert time format
        translatedText = translatedText.replace(/(\d{1,2}):(\d{2})/g, (match, p1, p2) => `<span class="highlight">${p1}.${p2}</span>`);

        return translatedText;
    }

    britishToAmerican(text) {
        let translatedText = text;

        // Translate British only words
        Object.keys(britishOnly).forEach(word => {
            const regex = new RegExp(`\\b${word}\\b`, 'gi');
            translatedText = translatedText.replace(regex, `<span class="highlight">${britishOnly[word]}</span>`);
        });

        // Translate spelling
        Object.keys(americanToBritishSpelling).forEach(americanWord => {
            const britishWord = americanToBritishSpelling[americanWord];
            const regex = new RegExp(`\\b${britishWord}\\b`, 'gi');
            translatedText = translatedText.replace(regex, `<span class="highlight">${americanWord}</span>`);
        });

        // Translate titles
        Object.keys(americanToBritishTitles).forEach(title => {
            const britishTitle = americanToBritishTitles[title];
            const regex = new RegExp(`\\b${britishTitle}\\b`, 'gi');
            translatedText = translatedText.replace(regex, (match) => {
                const formattedTitle = this.capitalizeFirstLetter(title) + ".";
                return `<span class="highlight">${formattedTitle}</span>`;
            });
        });

        // Convert time format (10.30 -> 10:30)
        translatedText = translatedText.replace(/(\d{1,2})\.(\d{2})/g, (match, p1, p2) => `<span class="highlight">${p1}:${p2}</span>`);

        return translatedText;
    }
}

module.exports = Translator;
