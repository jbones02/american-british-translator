const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);
const SERVER_URL = 'http://localhost:3000'

let Translator = require('../components/translator.js');

suite('Functional Tests', () => {
    test('Translation with text and locale fields: POST request to /api/translate', done => {
        chai.request(SERVER_URL)
            .post('/api/translate')
            .send({
                text: 'Mr. Bourg is my favorite teacher.',
                locale: 'american-to-british'
            })
            .end((err, res) => {
                const correctResObj = {
                    text: 'Mr. Bourg is my favorite teacher.',
                    translation: '<span class="highlight">Mr</span> Bourg is my <span class="highlight">favourite</span> teacher.'
                };
                assert.deepEqual(res.body, correctResObj);
                done();
            });
    });

    test('Translation with text and invalid locale field: POST request to /api/translate', done => {
        chai.request(SERVER_URL)
        .post('/api/translate')
        .send({
            text: 'Mr. Bourg is my favorite teacher.',
            locale: 'american-to-american'
        })
        .end((err, res) => {
            const correctResObj = { error: 'Invalid value for locale field' };
            assert.deepEqual(res.body, correctResObj);
            done();
        });
    });

    test('Translation with missing text field: POST request to /api/translate', done => {
        chai.request(SERVER_URL)
        .post('/api/translate')
        .send({
            locale: 'american-to-british'
        })
        .end((err, res) => {
            const correctResObj = { error: 'Required field(s) missing' };
            assert.deepEqual(res.body, correctResObj);
            done();
        });
    });

    test('Translation with missing locale field: POST request to /api/translate', done => {
        chai.request(SERVER_URL)
        .post('/api/translate')
        .send({
            text: 'Mr. Bourg is my favorite teacher.',
        })
        .end((err, res) => {
            const correctResObj = { error: 'Required field(s) missing' };
            assert.deepEqual(res.body, correctResObj);
            done();
        });
    });

    test('Translation with empty text: POST request to /api/translate', done => {
        chai.request(SERVER_URL)
        .post('/api/translate')
        .send({
            text: '',
            locale: 'american-to-american'
        })
        .end((err, res) => {
            const correctResObj = { error: 'No text to translate' };
            assert.deepEqual(res.body, correctResObj);
            done();
        });
    });

    test('Translation with text that needs no translation: POST request to /api/translate', done => {
        chai.request(SERVER_URL)
        .post('/api/translate')
        .send({
            text: 'I am the muffin man.',
            locale: 'american-to-british'
        })
        .end((err, res) => {
            const correctResObj = {
                text: 'I am the muffin man.',
                translation: 'Everything looks good to me!'
            };
            assert.deepEqual(res.body, correctResObj);
            done();
        });
    });
});
