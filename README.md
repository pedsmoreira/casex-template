<p align="center">
  <a href="https://battlecry.pedrosm.com">
    <img src="./docs/assets/logo-text.png" alt="Battlecry" width="256">
  </a>
</p>

<p align="center">
  The <a href="https://github.com/pedsmoreira/battlecry">Battlecry</a> standard for casex naming
</p>

<p align="center">
  <a href="https://www.npmjs.org/package/battle-casex"><img src="https://img.shields.io/npm/v/battle-casex.svg"/></a>
  <a href="https://github.com/prettier/prettier"><img src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg"/></a>
  <a href="https://travis-ci.org/pedsmoreira/battle-casex"><img src="https://travis-ci.org/pedsmoreira/battle-casex.svg?branch=master"/></a>
  <a href="https://codeclimate.com/github/pedsmoreira/battle-casex/maintainability"><img src="https://api.codeclimate.com/v1/badges/f82cf64419a071632c6e/maintainability" /></a>
  <a href="https://codeclimate.com/github/pedsmoreira/battle-casex/test_coverage"><img src="https://api.codeclimate.com/v1/badges/f82cf64419a071632c6e/test_coverage" /></a>
</p>

<h3 align="center">
  <a href="https://github.com/pedsmoreira/battle-casex/blob/master/CONTRIBUTING.md">Contributing</a>
   | 
  <a href="https://github.com/pedsmoreira/battle-casex/blob/master/CODE_OF_CONDUCT.md">Code of Conduct</a>
</h3>

# How it works

As the name suggests project uses [casex](https://github.com/pedsmoreira/casex), an open source library designed to be an `All in one function for transforming word casings`.

While casex is design to apply a pattern for a specific string, `battle-casex` focus on getting a template, finding all occurrences of `__name__` and replacing them with the corresponding value.

Here are a few examples of how it works, considering you're using the name `John Doe`:

- `__name__`: johndoe
- `__naMe__`: johnDoe
- `__NaMe__`: JohnDoe
- `__na-me__`: john-doe
- `__na me__`: john doe

## Pluralization and singularization

BattleCry provides pluralization and singularization out of the box with [pluralize](https://github.com/blakeembrey/pluralize).

To use this feature, instead of `__name__`, use `_name_`, with one underscore. Here are a few examples of how it works:

- Regulars: `user`
  - `_name_`: user
  - `_name_s`: users
- Irregulars: `person`
  - `_name_`: person
  - `_name_s`: people
- Composed names: `user name`
  - `_na me_`: user name
  - `_na me_s`: user names
- Names in the plural: `users`
  - `_na me_`: user
  - `_na me_s`: users
