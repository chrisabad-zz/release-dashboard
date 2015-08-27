# Campaign Monitor Release Dashboard

The **Release Dashboard** is meant for displaying on a large TV screen in an open space. It is a way for everyone in the company to understand the short-term roadmap for the product.

## Middleman Application

**Middleman** is a static site generator using all the shortcuts and tools in modern web development. Check out [middlemanapp.com](http://middlemanapp.com/) for detailed tutorials, including a [getting started guide](http://middlemanapp.com/basics/getting-started/).

Middleman gives easy access to a variety of cool tools to make development easier:

* [Sass](http://sass-lang.com/) for DRY stylesheets
* [CoffeeScript](http://coffeescript.org/) for safer and less verbose javascript
* [Sprockets](https://github.com/sstephenson/sprockets) as the asset pipeline
* [Slim](http://slim-lang.com/) for dynamic pages and simplified HTML syntax

## Installation

Middleman is built on Ruby and uses the RubyGems package manager for installation. These are usually pre-installed on Mac OS X and Linux. Windows users can install both using [RubyInstaller].

```
gem install middleman
```

## Getting Started

Once Middleman is installed, change directories into the project and install the necessary gems using [Bundler](http://bundler.io/bundle_install.html):

```
cd release-dashboard
bundle install
```

Once the gems are installed, you'll just need to run the preview server:

```
middleman server
```

The preview server allows you to build your site, by modifying the contents of the `source` directory, and see your changes reflected in the browser at: `http://localhost:4567/`

To get started, simply develop as you normally would by building HTML, CSS, and Javascript in the `source` directory.

## Deploying

We use [middleman-deploy](https://github.com/middleman-contrib/middleman-deploy) for easy deployment to [Github Pages](https://pages.github.com/). Deployment is as simple as this:

```
middleman deploy
```

This will build the static files for the dashboard, and push them to the `gh-pages` branch. The deployed dashboard can be viewed at http://chrisabad.github.io/release-dashboard.
