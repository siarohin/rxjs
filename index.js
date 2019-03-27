function createSubscribe(name = '') {
  return {
    next(x) {
      console.log(name, ': ', x);
    },
    error(err) {
      console.log(`Error: ${err}`);
    },
    complete() {
      console.log(name, ': Completed');
    }
  };
}

const map = new Map([[1, 2], [3, 4], [5, 6]]);

rxjs.from(map)
  .subscribe(createSubscribe('from'));