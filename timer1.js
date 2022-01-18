let delayArray = process.argv.slice(2);

const beepAlarm = ((array) => {
  if (array.length === 0) {
    return null;
  }
  for (let i = 0; i < array.length; i++) {
    if (!isNaN(array[i]) && array[i] > 0) {
      setTimeout(() => process.stdout.write('\x07'), (array[i]) * 1000);
    }
  }
});

beepAlarm(delayArray);