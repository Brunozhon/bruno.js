# Bruno.js

## What is bruno.js

Bruno.js is a fast, small JavaScript platform.

## Examples

Setting up strict mode:

```js
var r;
bruno.strict = true;
bruno.each(["hello", "world"]); // This will throw an error
bruno.each(["correct", "way"], function(i) {
  r += array[i];
});
bruno.strict = false;
bruno.each(["another", "array"]) // This will not throw an error
```

AJAX:

```js
bruno.ajax("GET", "examplefile.json", true, function() {
  if (this.readystate == 4) {
    if (this.status = 200) {
      bruno.HTML(this.response.HTMLcontent, "#examplediv");
    }
    if (this.status = 404) {
      bruno.HTML("Page not found.", "#examplediv");
    }
  }
})
```

