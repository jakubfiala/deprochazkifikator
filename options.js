

// Saves options to chrome.storage
function save_options() {
  var name = document.getElementById('name').value;

  chrome.storage.sync.set({
    prochazkaName: name
  },
  function() {
    console.log('haha');
    // Update status to let user know options were saved.
    var status = document.getElementById('save');
    status.textContent = 'Ulozene.';
    setTimeout(function() {
      status.textContent = 'Ulozit';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {

    chrome.storage.sync.get({
        prochazkaName: name
      },
      function(items) {
        document.getElementById('name').value = items.prochazkaName;
    });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
