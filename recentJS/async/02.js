//Async with generator

async function* fetchUrls(urls) {
  var prs = urls.map(fetch);

  for (let pr of prs) {
    let res = await pr;
    if (res.status === 200) {
      let text = await res.text();
      yield text.toUpperCase();
    } else {
      yield undefined;
    }
  }
}

var favrites = ["/url", "url2"];

//it won't work

// for (let text of fetchUrls(favrites)) {
//   console.log(text);
// }'

// async function main(favrites) {
//   for await (let text of fetchUrls(favrites)) {
//     console.log(text);
//   }
// }

// main(favrites)

function getAll() {
  return new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error("Error")), 200)
  );
}

async function main() {
  var res = await getAll();
  console.log(res);
}
// main().catch(err =>{

// })

// try {
//   main();
// } catch (error) {
//   console.log(err.message);
// }

main()
  .then((resolve) => {
    console.log(resolve);
  })
  .catch((err) => {
    console.log(err);
  });
Number.isInteger;
