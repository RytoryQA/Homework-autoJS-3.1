const sorting = require("../../app");

describe("Books names test suit", () => {
  test("Books names should be sorted in ascending order", () => {
    const input = [
      "Гарри Поттер",
      "Властелин Колец",
      "Волшебник изумрудного города",
    ]

    const expected = [
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ]

    const actual = sorting.sortByName(input)

    expect(actual).toEqual(expected);
  });

  test("Book name repeast", () =>{
    const input = [
      "Гарри Поттер",
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Властелин Колец",
    ]
    const expected = [
      "Властелин Колец",
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ]

    const actual = sorting.sortByName(input)

    expect(actual).toEqual(expected);
  });

  test("without params throw exception", () =>{
    expect(() => sorting.sortByName()).toThrow()
  });
});
