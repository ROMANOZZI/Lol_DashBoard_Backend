class DateUtility {
  // Converts a timestamp in milliseconds to a formatted date string "YYYY-MM-DD HH:mm:ss"
  convertTimeStamptoString(timestamp:number):string {
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // months are 0-indexed
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }

  // Converts duration in seconds to "Xm Ys" format
  convertDurationToString(durationSeconds:number):string {
    const minutes = Math.floor(durationSeconds / 60);
    const seconds = durationSeconds % 60;
    return `${minutes}m ${seconds}s`;
  }
}

export default new DateUtility();