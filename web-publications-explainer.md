# Web Publications Explainer

This is a straw-man proposal to use the HTML ```nav``` element to bind together web resources into a publication. Think of this as commentary on the ongoing work of the W3C Publishing Working Group, as it happens in the [Web Publications Repo](https://www.github.com/w3c/wpub)

## Definition

A web publication is a collection of web resources, treated as a single work, which meets user expectations of personalization, simplicity, accessibility, ubiquity, and unity:

1. (controversial!) I can navigate through the publication without clicking a link
2. If I leave the publication and go back later, the browser remembers where I was
3. If I search on the page, the scope of the search is the entire web publication
4. I can always access the table of contents from the current page
5. The Web publication has a shareable URL
6. I can read the publication while offline
7. I can annotate the publication
8. I can easily change the font, font size, theme, etc.

## Mechanism


How do we bind this collection of resources together? We need a list of the primary resources, with a default order. That's an ordered list of URLs, which can be semantically represented by the HTML ```nav``` element.

Define the URL of a web publication to be the URL of this “index” document which contains the ```nav```. 


## Rules

1. A web publication must have an “index” resource containing a ```nav``` element.
2. The primary publication resources must be referenced in this ```nav``` element, in the default order.
3. These URLs must be available (in the CORS sense) to the origin of the index resource. 
4. The title of the index resource is the title of the web publication. If the title is absent, @dauwhe and @bigbluehat will come after you. 
5. The URL of the index resource is the URL of the web publication.
6. Constituent resources should have a ```rel=contents``` link to the index resource.
7. Constituent resources should have ```rel=prev``` and ```rel=next``` links as appropriate.
8. The index resource must have an 📖 attribute on the ```html``` element, to identify it as a web publication. The attribute may also be serialized as the text string ```book```. 

## Examples

See [Moby-Dick](https://dauwhe.github.io/zero-labs/MobyDickNav/MobyDickNav.html).

```html
<!DOCTYPE html>
<html 📖 lang="en">
  <head>
    <title>Moby-Dick</title>
    <meta charset="utf-8">
  </head>
  <body>
    <main>
        <nav role="doc-toc">
          <ol>
            <li><a href="html/c001.html">Loomings</a></li>
            <li><a href="html/c002.html">The Carpet-Bag</a></li>
            <li><a href="html/c003.html">The Spouter-Inn</a></li>
            <li><a href="html/c004.html">The Counterpane</a></li>
          </ol>
        </nav>
     </main>
  </body>
</html>

```

## Accessibility

One reason for focusing on ```nav``` as the glue that holds a publication together is because of the need for a table of contents that is available to humans and assistive technology, and that supports the visual nuance provided by CSS, and the internationalization features of HTML. 


## Offline

Service workers can allow offline reading of web resources. Script can easily create a list of primary resources to pass to a service worker, but obtaining a list of secondary resources is more problematic. This is where we hope for help from browsers, as authoring an exhaustive list of fonts, images, CSS files, etc. is no fun. 

## Security

Web publications are based on the [origin](https://tools.ietf.org/html/rfc6454) model of the web. In particular, a resource in a web publication should be same-origin to the index resource, or available to that origin via CORS. 



## Experimentation

1. One way to create a single entity out of multiple HTML documents is to use the now-deprecated HTML Imports. We hope that some similar mechanism will come to the web platform soon, but there is still support (and a polyfill) for HTML imports. 
2. Shadow DOM might be useful for two things. One is encapsulating styles of imported components. It might also [help allow authors](https://tabatkins.github.io/specs/css-shadow-parts/) to expose hooks for readers to personalize publications, while still retaining control of certain critical design elements. 

## The State of the Art

We've drawn inspiration from Jeremy Keith's [Resilient Web Design](https://resilientwebdesign.com). This book is a beautiful example of a "bookish" experience on the web now, with good use of link relations, simple design, and beautifully clear, semantic HTML. The subject of the book is also on-topic. 
