interface Line {
  items: Array<number>;
  label: "" | "*";
  countNumbers: number;
}

const getRandomNumber = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const ConvertToUsefullView = (array: Array<Array<number>>): Array<Line> => {
  return array.map((el) => ({ items: el, label: "", countNumbers: 3 }));
};

const markMinLine = (array: Array<Line>): Array<Line> => {
  const cordinates = {
    index: 0,
    innerIndex: 0,
    value: 100,
  };
  array.forEach((el, index) => {
    el.items.forEach((innerItem, innerIndex) => {
      if (innerItem < cordinates.value) {
        cordinates.value = innerItem;
        cordinates.index = index;
        cordinates.innerIndex = innerIndex;
      }
    });
  });
  return array.map((el, i) =>
    i === cordinates.index ? { ...el, label: "*" } : el
  );
};

export const setNumberCountToChange = (array: Array<Line>):Array<Line> => {
  return array.map((line) => {
    let count = 0;
    let disabledIndexes:number[] = [];
    line.items.forEach((item, index) => {
      if (!disabledIndexes.includes(index)) {
        if (
          Math.sign(item) === Math.sign(line.items[index + 1]) &&
          Math.sign(item) === Math.sign(line.items[index + 2])
        ) {
          count += 1;
          disabledIndexes.push(index+1)
          disabledIndexes.push(index+2)
        }
      }
    });
    return ({...line, countNumbers: count})
  });
};

const array = new Array(10)
  .fill("")
  .map((el) =>
    new Array(10).fill("").map((subEl) => getRandomNumber(-100, 100))
  );

console.log(setNumberCountToChange(markMinLine(ConvertToUsefullView(array))));
