function supportsImports() {
      return 'import' in document.createElement('link');
    }
    
    
   

    if (supportsImports()) {
      document.getElementsByClassName('fallback')[0].style.display = 'none';  // hide fallback if imports supported
    
      var links = document.querySelectorAll('link[rel="import"]');
      for (var link of links) {
        var content = link.import;
 
        var el = content.querySelector('html');
        console.log(el);
        document.body.appendChild(el);
       }
       
    } else {
    document.getElementsByClassName('fallback')[0].style.display = 'block';  // show fallback if imports not supported
    }