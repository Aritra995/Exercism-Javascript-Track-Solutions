//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(matrixOfNumbers) {
    this.matrixOfNumbers = matrixOfNumbers;
  }
  



  get rows() {
    var matrixOfNumbers = this.matrixOfNumbers;
    var rowsArray = matrixOfNumbers.split('\n');
    let rows = new Set();
    rowsArray.forEach((row) => {
      numbersInEachRow = row.split(' ');
      let eachRow = new Set();
      numbersInEachRow.forEach( (number) => {
          eachRow.add(Number(number));
      } )
      rows.add(eachRow);
    });
  }

  get columns() {
  }
}
