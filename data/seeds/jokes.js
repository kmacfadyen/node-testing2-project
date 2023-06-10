exports.seed = function(knex) {
    return knex('jokes').truncate()
        .then(function () {
            return knex('jokes').insert([
                {joke: 'Whats up', punchline: 'The sky'},
                {joke: 'Why could the kids not see the pirate movie', punchline: 'It was rated arrrgh'},
                {joke: 'What is the meaning of life', punchline: '42'},
                {joke: 'Where is the joke', punchline: 'I forgot'},
            ])
        })
}