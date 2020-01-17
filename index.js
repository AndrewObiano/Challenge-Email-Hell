const emailLog = require("./email_log.json");

function countUniqueEmails(emailFile) {
  return emailFile.emails.reduce((prevEmail, curr) => {
    if (prevEmail[curr.email]) {
      prevEmail[curr.email]++; // increase count on that existing email
    } else {
      prevEmail[curr.email] = 1; // initial count and add email to list
    }
    return prevEmail;
  }, {});
}

console.log(countUniqueEmails(emailLog));
