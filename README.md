# Zero Labs https://dauwhe.github.io/zero-labs/
###A toy digital reading system for EPUB Zero

Can the web platform provide a great reading experience for publications? Can [web application manifests](https://www.w3.org/TR/appmanifest/) and [service workers](https://w3c.github.io/ServiceWorker/) more easily implement the functionality of dedicated reading apps? Zero Labs is an experimental implementation of EPUB Zero.

## Goals

1. Provide a reading experience much like common dedicated e-readers like iBooks and Readium. This includes user control over font size, a night mode, easy access to navigation, pagination, etc.

2. The publications themselves should not need any scripts to function.

3. The publications should work offline (in progress).

4. It should be possible to save publications to a local filesystem (in progress).

## Publications

Each publication is in a folder. The folder contains a `index.html` file with a `nav` element which defines the default reading order, as the `spine` does in EPUB. 

## Reading System

The reading system is the `main.html` page. Book content is displayed in an iframe. Navigation between files is based on reading the first `nav` element in `index.html`.


## Warning

Warning: the code is really rough, as I don't know what I'm doing.

## Usage

Use `python -m SimpleHTTPServer` to host the repo at `http://localhost:8000/`

## Contributing

Currently, the repository is a mix of ES5 and ES6/ES2015. We are using [eslint](http://eslint.org/) and the
[AirBnB JavaScript code styles](https://github.com/airbnb/javascript) to keep things tidy.
`kroner.js` is the one ES6/ES2015 file we have atm, so to lint it do the following:

```
$ npm i -g eslint eslint-config-airbnb # once to install things
$ eslint kroner.js # prior to committing changes
```

## Acknowledgments

[Jake Archibald](https://jakearchibald.github.io/ebook-demo/publisher-site/readme/) wrote the original service worker (`kroner.js`) and `page.js` files. 


