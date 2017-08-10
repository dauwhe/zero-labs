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
3. The title of the index resource is the title of the web publication. If the title is absent, @dauwhe and @bigbluehat will come after you. 
4. The URL of the index resource is the URL of the web publication.
5. Constituent resources should have a ```rel=contents``` link to the index resource.
6. Constituent resources should have ```rel=prev``` and ```rel=next``` links as appropriate.

## Examples

See [Moby-Dick](https://dauwhe.github.io/zero-labs/MobyDickNav/MobyDickNav.html).


## Experimentation

1. One way to create a single entity out of multiple HTML documents is to use the now-deprecated HTML Imports. We hope that some similar mechanism will come to the web platform soon, but there is still support (and a polyfill) for HTML imports. Ideally we'd place the imported content in shadow DOM to allow style encapsulation. 

