'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  const translate = (untranslatedText, locale) => {
    let resObj;
    if (untranslatedText === '') {
      resObj = { error: 'No text to translate' }
    } else if (locale === 'american-to-british') {
      resObj = {
        text: untranslatedText,
        translation: translator.americanToBritish(untranslatedText)
      };
    } else if (locale === 'british-to-american') {
      resObj = {
        text: untranslatedText,
        translation: translator.britishToAmerican(untranslatedText)
      };
    } else {
      resObj = { error: 'Invalid value for locale field'}
    }
    
    if (untranslatedText === resObj.translation) {
      resObj.translation = 'Everything looks good to me!'
    }

    return resObj;
  }

  app.route('/api/translate')
    .post((req, res) => {
      try {
        const untranslatedText = req.body.text;
        const locale = req.body.locale;

        if (untranslatedText == null || !locale) {
          return res.status(200).json({ error: 'Required field(s) missing' });
        } else {
          const resObj = translate(untranslatedText, locale);
          return res.status(200).json(resObj);
        }

      } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Server error' })
      }
    });
};
