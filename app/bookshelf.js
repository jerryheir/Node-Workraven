'use strict';

let knex = require('app/config/database');
let bookshelf = require('bookshelf')(knex);

// Resolve circular dependencies with relations
bookshelf.plugin('registry');

// Hide attributes when calling toJSON
bookshelf.plugin('visibility');

// Soft delete
bookshelf.plugin(require('bookshelf-paranoia'));

module.exports = bookshelf;
