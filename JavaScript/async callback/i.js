
  const arr = ['Tez', 'Tilak', 'Tabbu'];

  for (var i = 0; i < arr.length-1; i++) {

    setTimeout(() => {
      console.log(`Index: ${i}, Value: ${arr[i]}`);
    }, 1000);
  }

