# Angular Ally - Common and useful [AngularJS](http://angularjs.org/) filters, directives, services, factories and modules
***

[![Build Status](https://secure.travis-ci.org/ebertsch/Angular-Ally.png)](http://travis-ci.org/ebertsch/Angular-Ally)

## Demo

Visit http://ebertsch.github.io/Angular-Ally/! to watch all of the action.

## Installation

Installation is easy as angular-allay has minimal dependencies - only the AngularJS.
After downloading dependencies (or better yet, referencing them from your favourite CDN) you need to download build version of this project. All the files and their purposes are described here: 
https://github.com/ebertsch/angular-ally/tree/gh-pages#build-files
Don't worry, if you are not sure which file to take, opt for `angular-ally-[version].min.js`.

When you are done downloading all the dependencies and project files the only remaining part is to add dependencies on the `nga` AngularJS module:

```javascript
angular.module('myModule', ['nga']);
```