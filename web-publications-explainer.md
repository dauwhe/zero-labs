# Web Publications Explainer

This is a straw-man proposal to use the HTML ```nav``` element to bind together web resources into a publication. Think of this as commentary on the ongoing work of the W3C Publishing Working Group, as it happens in the [Web Publications Repo](https://www.github.com/w3c/wpub)

A web publication is a collection of web resources, treated as a single work, which meets user expectations of personalization, simplicity, accessibility, ubiquity, and unity:

1. (controversial!) I can navigate through the publication without clicking a link
2. If I leave the publication and go back later, the browser remembers where I was
3. If I search on the page, the scope of the search is the entire web publication
4. I can always access the table of contents from the current page
5. The Web publication has a shareable URL
6. I can read the publication while offline
7. I can annotate the publication


How do we bind this collection of resources together? We need a list of the primary resources, with a default order. That's an ordered list of URLs, which can be semantically represented by the HTML ```nav``` element.

Define the URL of a web publication to be the URL of this “index“ document which contains the ```nav```. 


## Examples

See [Moby-Dick](https://dauwhe.github.io/ZeroLabs/MobyDickNav/MobyDickNav.html).


## Experimentation

1. One way to create a single entity out of multiple HTML documents is to use the now-deprecated HTML Imports. We hope that some similar mechanism will come to the web platform soon, but there is still support (and a polyfill) for HTML imports. Ideally we'd place the imported content in shadow DOM to allow style encapsulation. 

