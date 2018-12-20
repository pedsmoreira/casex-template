# Getting Started

# How it works

As the name suggests project uses [casex](https://github.com/pedsmoreira/casex), an open source library designed to be an `All in one function for transforming word casings`.

While casex is design to apply a pattern for a specific string, `named-casex` focus on getting a template, finding all occurrences of `__name__` and replacing them with the corresponding value.

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
