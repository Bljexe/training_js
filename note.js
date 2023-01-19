// NOTE JAVASCRIPT
function getNote(score) {
  let A = score >= 90 && score <= 100;
  let B = score >= 80 && score <= 89;
  let C = score >= 70 && score <= 79;
  let D = score >= 60 && score <= 69;
  let F = score < 60 && score >= 0;

  let note;

  if (A) {
    note = "A";
  } else if (B) {
    note = "B";
  } else if (C) {
    note = "C";
  } else if (D) {
    note = "D";
  } else if (F) {
    note = "F";
  } else {
    note = "Note undefined";
  }

  return note;
}

console.log(getNote(55));
