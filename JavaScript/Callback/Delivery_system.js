function deliverPackage(address, callback) {
  console.log('Delivering to ' + address);
  callback(); // notify once done
}

deliverPackage('Jaipur', function() {
  console.log('Customer notified 📦');
});

$.getJSON('foo.json', {}, function(data) {
  console.log('Data loaded:', data); // callback runs *after* data is fetched
});
