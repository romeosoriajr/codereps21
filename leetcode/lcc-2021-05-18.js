function findDuplicate(paths) {

  const map = new Map();
  for (let path of paths) {
    const [dir, ...fileContents] = path.split(' ');

    for (let fileContent of fileContents) {
      const [filename, content] = fileContent.split('(');

      const values = map.get(content) || [];
      values.push(`${dir}/${filename}`);
      map.set(content, values);

    }
  }

  const result = [];
  for (let values of map.values()) {

    if (values.length == 1) continue;
    result.push(values);

  }
  return result;

}
const paths = ["root/a 1.txt(abcd) 2.txt(efgh)","root/c 3.txt(abcd)","root/c/d 4.txt(efgh)","root 4.txt(efgh)"];
findDuplicate(paths);
