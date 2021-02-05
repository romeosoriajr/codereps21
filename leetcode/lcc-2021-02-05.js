function simplifyPath (path) {

  const pathArr = path.split(/\/+/);

  const stack = [];

  for (let el of pathArr) {
    if (el == '..') {
      stack.pop();
    } else if (!!el && el !== '.') {
      stack.push(el);
    }
  }

  return '/'+stack.join('/');

}

console.log(simplifyPath("/a/./b/../../c/"));
