var elms = document.getElementsByTagName('*'); //select all elements on the page
 console.time('Loop time');
 for (var i = 0; i < 5000; i++) {
    for (var j = 0, length = elms.length; j < length; j++) {
        // nothing to do ...
    }
 }
 console.timeEnd('Loop time');