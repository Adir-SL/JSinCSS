# JSinCSS
A JS library to embed simple JS snippets in CSS files.

# Getting started
The easiest way to get started is by adding the script tag in your document head, like so:
```HTML
<script src="https://adir-sl.github.io/JSinCSS/jsincss.js"></script>
```

After that, you can add to your CSS declaration a new ```content``` property that can hold any JavaScript you'd like to run, for example:
```CSS
button:active {
  content: "alert('Works!');";
}
```