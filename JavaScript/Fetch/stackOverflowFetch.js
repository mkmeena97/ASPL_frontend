// stackOverflowFetch.js
fetch('https://api.stackexchange.com/2.3/questions?order=desc&sort=activity&tagged=javascript&site=stackoverflow')
  .then(res => res.json())
  .then(data => {
    data.items.slice(0, 5).forEach((q, i) => {
      console.log(`${i + 1}. ${q.title}`);
    });
  })
  .catch(console.error);
