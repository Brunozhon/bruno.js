# Bruno.js syntax

All Bruno.js functions start with `bruno`. For example:

```js
bruno.strict = true; 
bruno.getElement("#exampleid")
bruno.getElements(".exampleclass")
bruno.HTML("This <code>text</code> is some example <b>HTML</b>.")
bruno.text("This is some example text.")
```

See what I mean? Want to know what they mean? This is about **syntax**, not **refrence**. You still want to go on?

Function|What it does
---|---
`bruno.strict`|Sets Bruno.js into strict mode. It is set to `false` at first, but you can change it.
`bruno.getElement(elem)`|Gets an element.
`bruno.getElements(elem)`|Gets multiple elements.
`bruno.HTML(html, elem)`|Sets an element's `innerHTML`.
`bruno.text(text, elem)`|Sets an element's `innerText`, otherwise known as `textContent`.

We covered it all! Was it hard? No! It was *easy*! Well, at least its easy for some people.

Now we covered syntax, you can...

1. Look at the source code. <https://github.com/Brunozhon/bruno.js/blob/main/bruno.js>
2. Learn some more. [Back to docs.](/bruno.js/docs/)

