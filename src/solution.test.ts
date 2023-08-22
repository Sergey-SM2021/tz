import { setNumberCountToChange } from "./solution";

test("setNumberCountToChange1", () => {
  expect(
    setNumberCountToChange([
      { countNumbers: 0, label: "", items: [2, 3, 1, -2, -3, 3, 4, 5] },
    ])
  ).toEqual([
    { countNumbers: 2, label: "", items: [2, 3, 1, -2, -3, 3, 4, 5] },
  ]);
});


test("setNumberCountToChange2", () => {
  expect(
    setNumberCountToChange([
      { countNumbers: 0, label: "", items: [15, 35, 55,  25,  41, 46, 49, -5, -31, -64] },
    ])
  ).toEqual([
    { countNumbers: 4, label: "", items: [15, 35, 55,  25,  41, 46, 49, -5, -31, -64] },
  ]);
});

test("setNumberCountToChange with positive numbers", () => {
    expect(
      setNumberCountToChange([
        { countNumbers: 0, label: "*", items: [15, 35, 55,  25,  41, 46, 49, 5, 31, 64] },
      ])
    ).toEqual([
      { countNumbers: 4, label: "*", items: [15, 35, 55,  25,  41, 46, 49, 5, 31, 64] },
    ]);
  });