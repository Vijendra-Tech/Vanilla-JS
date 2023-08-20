//async awaait in loop

function getFiles(fname){
    return new Promise.resolve(fname)
}

var files = ['file1','file2','file3']

files.forEach(async function match(f){
     console.log(await f);
})


