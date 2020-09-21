/**
 * @param {{seconds: Number, nanoseconds: Number}} timestamp
 */
function convertTimestampToDate(timestamp) {
  if (timestamp.seconds && timestamp.nanoseconds) {
    return new Date(timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000)
  }
}

/**
 * @param {Date} date
 */
function dateFormatKorean(date) {
  return `${date.getFullYear()}년 ${
    date.getMonth() + 1
  }월 ${date.getDate()}일 ${date.getHours()}시 ${date.getMinutes()}분`
}

export { convertTimestampToDate, dateFormatKorean }
