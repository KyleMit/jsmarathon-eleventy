# Eleventy Project for [JS Marathon](https://labs.thisdot.co/javascript-marathon)

Brought to you by [This Dot Labs](https://labs.thisdot.co/javascript-marathon)

Check out our [live eventy website](https://labs.thisdot.co/)

## Video Tutorials

* [**Part 1**](https://www.youtube.com/watch?v=c8XKdAg0-ns) on 10/28/2020
* [**Part 2**](https://www.youtube.com/watch?v=9eY60505pXA) on 12/9/2020


## Links


* [11ty](https://www.11ty.dev/)
* [Nunjucks](https://mozilla.github.io/nunjucks/)
* [Node](https://nodejs.dev/)
* [Netlify](https://www.netlify.com/)
* [GitHub](https://github.com/)

## Part 1

### Quickstart

```bash
# setup
npm init -y
git init
npx gitignore node
npm install @11ty/eleventy

# run
eleventy --serve
```

### Create Some Content

* `about.njk`
* `contact.md`
* `index.md`


### Create a Layout

* Create `_includes/defaultLayout.njk`
* Inject `{{content | safe}}`
* Add frontmatter to point to layout

  ```yaml
  ---
  layout: defaultLayout.njk
  ---
  ```
  
 ### Create Eleventy Config
 
 * Create `.eleventy.js`
 * Add [`addPassthroughCopy`](https://www.11ty.dev/docs/copy/)
 * Add some styles
 
 
 ### Create / Consume Properties
 
 * Add `title` property to frontmatter
 * Consume `{{title}}` elsewher (in layout)

### Push to Netlify

* Commit changes
* Push to Github
* New Site From Git


### Templating

* Condition blocks with [if...then](https://mozilla.github.io/nunjucks/templating.html#if)


### Add Global Data

* Create `_data/cats.json` [global data file](https://www.11ty.dev/docs/data-global/)
* Output with `{{cats | dump}}`



