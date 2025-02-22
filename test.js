function calculateVAT(price) {
  if (typeof price === 'string') {
    return 'Invalid';
  } else if (price < 0) {
    return 'Invalid';
  } else {
    const amount = (price * 7.5) / 100;
    return amount;
  }
}

function validContact(contact) {
  if (contact.length === 11 && contact.startsWith('01') && contact != ' ') {
    return true;
  } else if (typeof contact != 'string') {
    return 'Invalid';
  } else {
    return false;
  }
}

function willSuccess(marks) {
  const passMark = [];
  const failMark = [];

  if (!Array.isArray(marks)) {
    return 'Invalid';
  } else {
    for (let mark of marks) {
      if (mark >= 50) {
        passMark.push(mark);
      } else {
        failMark.push(mark);
      }
    }
  }

  if (passMark.length > failMark.length) {
    return 'true';
  } else {
    return 'false';
  }
}

function validProposal(person1, person2) {
  if (typeof person1 !== 'object' || typeof person2 !== 'object') {
    return 'Invalid';
  } else {
    if (
      person1.gender !== person2.gender &&
      Math.abs(person1.age - person2.age) <= 7
    ) {
      return true;
    } else {
      return false;
    }
  }
}

function calculateSleepTime(times) {
  for (let time of times) {
    if (typeof time !== 'number') {
      return 'Invalid';
    } else {
      let totalSeconds = 0;
      for (let i = 0; i < times.length; i++) {
        totalSeconds += times[i];
      }

      let hours = Math.floor(totalSeconds / 3600);
      let minutes = Math.floor((totalSeconds % 3600) / 60);
      let seconds = totalSeconds % 60;
      return { hour: hours, minute: minutes, second: seconds };
    }
  }
}
