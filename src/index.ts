const randomNumber = (min = 0, max = 100) => {
  // return Math.round((Math.random() * (max - min)) / min);
  return `V3.0.0 typescript rollup, random number= 
  ${Math.round((Math.random() * (max - min)) / min)}`;
};

export default randomNumber;
