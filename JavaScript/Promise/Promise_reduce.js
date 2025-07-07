const files = ["file1.jpg", "file2.jpg", "file3.jpg"];

function upload(file) {
  return new Promise((resolve) => {
    console.log(`Uploading ${file}...`);
    setTimeout(() => {
      console.log(`${file} uploaded `);
      resolve();
    }, 1000);
  });
}

// Chain uploads one after another
files.reduce((prev, file) => {
  return prev.then(() => upload(file));
}, Promise.resolve())
.then(() => {
  console.log(" All files uploaded in sequence!");
});
