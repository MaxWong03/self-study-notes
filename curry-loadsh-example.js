const curry = require('loadash/curry');

const match = curry((what, str) => str.match(what));

const replace = curry((what, replacement, str) => str.replace(what, replacement));

const filter = curry((f, arr) => arr.filter(f));

const map = curry((f, arr) => arr.map(f));

match(/\s+/g, 'hello world');
// [ ' ' ]

match(/\s+/g)('hello world');
// [ ' ' ]

const hasSpaces = match(/\s+/g);
// function(x) { return x.match(/\s+/g) }

hasSpaces('hello world');
// [ ' ' ]

hasSpaces('spaceless');
// null

filter(hasSpaces, ['tori_spelling', 'tori amos']);
// ['tori amos']

const findSpaces = filter(hasSpaces);
// function(xs) { return xs.filter(function(x) { return x.match(/\s+/g) }) }

findSpaces(['tori_spelling', 'tori amos']);
// ['tori amos']

const noVowels = replace(/[aeiouy]/ig);
// function(replacement, x) { return x.replace(/[aeiouy]/ig, replacement) }

const censored = noVowels("*");
// function(x) { return x.replace(/[aeiouy]/ig, '*') }

censored('Chocolate Rain');
// 'Ch*c*l*t* R**n'