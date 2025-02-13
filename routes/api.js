'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  const translateBritishToAmerican = britishText => {

  }

  const translateAmericanToBritish = AmericanText => {
    
  }

  const translate = (untraslatedText, originalLocale) => {
    let returnObj;
    if (!untranslatedText || !originalLocale) {
      returnObj = { error: 'Required field(s) missing' }
    } else if (originalLocale === 'american-to-british') {
      returnObj = {
        text: untraslatedText,
        translation: translateBritishToAmerican(untraslatedText)
      };
    } else if (originalLocale === 'british-to-american') {
      returnObj ={
        text: untraslatedText,
        translation: translateAmericanToBritish(untraslatedText);
      };
    } else {
      returnObj = { error: 'Invalid value for locale field'}
    }
    return returnObj;
  }

  app.route('/api/translate')
    .post((req, res) => {
      try {
        const untraslatedText = req.body.text;
        const originalLocale = req.body.locale;

        if (!untraslatedText || !originalLocale) {
          return res.status(200).json({ error: 'Required field(s) missing' });
        } else {
          return translate(untraslatedText, originalLocale);
        }

      } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Server error' })
      }
    });
};
