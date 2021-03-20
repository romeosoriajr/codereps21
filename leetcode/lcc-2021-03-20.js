class UndergroundSystem {

  constructor() {
    this.trips = {}
    this.travels = {}
  }

  checkIn(id, stationName, currentTime) {

    const travel = {
      startStation: stationName,
      startTime: currentTime
    }

    this.travels[id] = travel;

    if (!this.trips[stationName]) {
      this.trips[stationName] = {}
    }
  }

  checkOut(id, stationName, currentTime) {

    const travel = this.travels[id];

    if (!travel) {
      return undefined;
    }

    const { startStation, startTime } = travel;

    const start = this.trips[startStation];

    if (!start[stationName]) {
      start[stationName] = [];
    }

    const completedTimes = start[stationName];

    completedTimes.push(currentTime-startTime);

  }

  getAverageTime(startStation, endStation) {

    const completedTimes = this.trips[startStation][endStation];

    return (completedTimes.reduce((total, time)=> total + time)/completedTimes.length)

  }
}

