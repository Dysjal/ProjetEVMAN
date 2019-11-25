     import saveAs from './file-saver';

 function write() {

   var blob = new Blob(["test text"], {type : "text/plain;charset=utf8"});
   saveAs(blob, "testfile1.txt");
  }

    /*  function readerSingleFile(e) {
      document.getElementById('file-input')
  .addEventListener('change', readSingleFile, false);
  var file = e.target.files[0];
  console.log(e.target);
  if (!file) {
    return;
  }
  var reader = new FileReader();
  reader.onload = function(e) {
    var contents = e.target.result;
    displayContents(contents);
  };
  reader.readAsText(file);
}

function displayContents(contents) {
  var element = document.getElementById('file-content');
  element.textContent = contents;
}*/


