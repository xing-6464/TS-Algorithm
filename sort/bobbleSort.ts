interface Array<T> {
  bobbleSort: () => void
}

Array.prototype['bobbleSort'] = function () {
  for(let j = 0; j < this.length - 1; j++) {
    
  }
}

const arr = [5, 2, 3, 4, 1]
arr.bobbleSort()
