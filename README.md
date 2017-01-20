# Glazou Labs https://dauwhe.github.io/glazou-labs/
###a toy digital reading system

Can the web platform provide a great reading experience for publications? Can [web application manifests](https://www.w3.org/TR/appmanifest/) and [service workers](https://w3c.github.io/ServiceWorker/) more easily implement the functionality of dedicated reading apps? Acme Labs is an experimental implementation of a browser-friendly ebook format [BFF](https://github.com/dauwhe/epub31-bff), and aims to explore some of the ideas of [(portable) web publications](https://github.com/w3c/dpub-pwp-ucr). 

## Goals

1. Provide a reading experience much like common dedicated e-readers like iBooks and Readium. This includes user control over font size, a night mode, easy access to navigation, pagination, etc.

2. The publications themselves should not need any scripts to function.

3. The publications should work offline.

4. It should be possible to save publications to a local filesystem.

## Publications

Each publication is in a folder. The folder contains a `index.html` file
## Reading System

The reading system is the `main.html` page. Book content is displayed in an iframe. Navigation between files is based on reading the manifest.

The service worker caches files listed in the manifest when the "save" button is clicked. The "zip" button downloads a zip of the publication. The highly experimental "package" button downloads a package based on the W3C TAG [Packaging on the Web](https://w3ctag.github.io/packaging-on-the-web/) draft, as extended by [Dmitry Titov](https://github.com/dimich-g/webpackage/blob/master/README.md). 

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
