function canSnailReachEnd(length, speed, lengthIncreases) {
    length=length+lengthIncreases*525600
    return length/speed<525600
  }