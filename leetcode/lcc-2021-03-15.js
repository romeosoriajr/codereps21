function encode (longURL) {

  var shortURL = Buffer.from(longURL, 'binary')
                    .toString('base64');

  return `http://tinyurl.com/${shortURL}`

}

function decode (shortURL) {

  let encoded = shortURL.split('tinyurl.com/').pop();
  return Buffer.from(encoded, 'base64').toString();

}

console.log(encode('https://rome.af/asdfasdfasdfasdf'))
console.log(decode('http://tinyurl.com/aHR0cHM6Ly9yb21lLmFmL2FzZGZhc2RmYXNkZmFzZGY='))
