function numUniqueEmails(emails) {
  const uniques = new Set();

  for (const email of emails) {
    const [name, domain] = email.split("@");

    if (isDomainValid(domain)) {
      const localName = getLocalName(name);
      uniques.add(`${localName}@${domain}`);
    }
  }

  return uniques.size;
}
function getLocalName(input) {
  const plusFilter = input.split("").findIndex((c) => c == "+");

  const localName = plusFilter != -1 ? input.substr(0, plusFilter) : input;

  return localName.replace(/\./g, "");
}
function isDomainValid(domain) {
  return domain.includes(".");
}
