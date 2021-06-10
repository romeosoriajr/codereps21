class MyCalendar {
  constructor () {
    this.bookings = [];
  }

  book (start, end) {

    for (let [a, b] of this.bookings) {
      if (Math.max(a, start) < Math.min(b, end)) return false;
    }

    this.bookings.push([start, end]);
    return true;

  }
}
const cal = new MyCalendar();
cal.book(47,50)
cal.book(33,41)
cal.book(39,45)
cal.book(33,42)
cal.book(25,32)
cal.book(26,35)
cal.book(19,25)
cal.book(3,8)
cal.book(8,13)
cal.book(18,27)
