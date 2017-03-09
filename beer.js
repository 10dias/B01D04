/**
* @author Thassio Victor <tvmcarvalho@gmail.com>
* @desc Listar cervejas da API httpss://api.punkapi.com
    *
    */

'use strict';

const https = require('https');

const API = 'https://api.punkapi.com/v2/beers';

https.get(API, function(res) {
    var finalRes = '';

    res.on('data', function(d) {
        finalRes +=d;
    });

    res.on('end', function() {
        console.log(finalRes);
    });
});

