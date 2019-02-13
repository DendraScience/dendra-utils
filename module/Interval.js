/**
 * Basic interval class; adapted from:
 * http://docs.sympy.org/latest/modules/sets.html
 */
export default class Interval {
  static empty() {
    return new Interval(0, 0, true, true);
  }

  constructor(start, end, leftOpen = false, rightOpen = false) {
    [this.start, this.end, this.leftOpen, this.rightOpen] = [start, end, leftOpen, rightOpen];
  }

  get empty() {
    return this.end < this.start || this.end - this.start === 0 && (this.leftOpen || this.rightOpen);
  }

  intersect(other) {
    if (!(other instanceof Interval)) return;
    if (this.start > other.end || this.end < other.start) return Interval.empty();
    let start, end, leftOpen, rightOpen;

    if (this.start < other.start) {
      start = other.start;
      leftOpen = other.leftOpen;
    } else if (this.start > other.start) {
      start = this.start;
      leftOpen = this.leftOpen;
    } else {
      start = this.start;
      leftOpen = this.leftOpen || other.leftOpen;
    }

    if (this.end < other.end) {
      end = this.end;
      rightOpen = this.rightOpen;
    } else if (this.end > other.end) {
      end = other.end;
      rightOpen = other.rightOpen;
    } else {
      end = this.end;
      rightOpen = this.rightOpen || other.rightOpen;
    }

    return new Interval(start, end, leftOpen, rightOpen);
  }

}