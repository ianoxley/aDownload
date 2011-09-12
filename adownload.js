// adownload.js
// ------------
// Finds all downloadable links in the current document
// and adds the *download* attribute
//
function addDownloadAttribute() {
  var files = ['pdf', 'zip', 'gz', '7z', 'tar'], /* TODO load from options */
      selector = '';

  for (var i = 0, size = files.length; i < size; i++) {
    selector = 'a[href$=".' + files[i] + '"]:not([download])';
    var nodes = document.querySelectorAll(selector);
    console.log(nodes);
    for (var j = 0, limit = nodes.length; j < limit; j++) {
      var currentLink = nodes[j];
      createDownloadableLink(currentLink);
    }
  }
}

function createDownloadableLink(elem) {
  if (elem.tagName.toLowerCase() !== 'a') {
    return;
  }

  var re = /\/([\w\._\-%\s]+(\.[a-zA-Z0-9]{2,3}))$/i,
      matches = elem.href.match(re),
      basename = matches[1] || 'download';

  elem.download = basename;
}

addDownloadAttribute();
