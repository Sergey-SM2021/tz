import { setNumberCountToChange } from "./solution";

test("setNumberCountToChange", () => {
  expect(
    setNumberCountToChange([
      { countNumbers: 0, label: "", items: [2, 3, 1, -2, -3, 3, 4, 5] },
    ])
  ).toEqual([
    { countNumbers: 2, label: "", items: [2, 3, 1, -2, -3, 3, 4, 5] },
  ]);
});
