//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (date) => {
  let time = date.getTime();
  let gigaSecond = Math.pow(10,12);
  let futureTime = time + gigaSecond;
  return new Date(futureTime);
};
