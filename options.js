// options.js
// ----------

/**
 * Loads the previously saved file extensions into the form or the
 * default file extensions if none have been saved previously
 */
function loadExts() {
  var userOptions = localStorage[EXTS_KEY];
  console.log(userOptions);
  if (!userOptions || !userOptions.search(/^\.pdf(\s\.[a-zA-Z0-9]{2,3})*$/)) {
    exts.value = DEFAULT_EXTS;
  } else {
    exts.value = JSON.parse(userOptions);
  }
}

/**
 * Saves the users preferred file extensions to download.
 *
 * Validation is done declaratively via HTML5 forms.
 */
function saveChanges(event) {
  event.preventDefault();
  event.stopPropagation();
  console.log('saving changes');

  var elem = document.getElementById('exts');
  console.log(elem);
  localStorage[EXTS_KEY] = JSON.stringify(elem.value); 

  // TODO show a confirmation message to the user
}

function main() {
  loadExts();

  var theForm = document.forms[0];
  theForm.addEventListener('submit', saveChanges, true);
}

main();
