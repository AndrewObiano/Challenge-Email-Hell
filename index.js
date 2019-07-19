const emailLog = require("./email_log.json");

function countUniqueEmails(emailFile) {
  // do work here
  return emailFile.emails.reduce((obj, curr) => {
    // obj is "previous" element
    if (obj[curr.email]) {
      // if email already in obj
      obj[curr.email]++; // increase count on that email
    } else {
      obj[curr.email] = 1; // initial count and add email to obj
    }
    return obj;
  }, {});
}

console.log(countUniqueEmails(emailLog));
