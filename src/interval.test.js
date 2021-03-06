const Interval = require('./interval')

/**
   * Exemple 1 :
   *      interval1 =                          ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
   *      interval2 =                                  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
   *      interval1.overlaps(interval2) => true
   *
   * Exemple 2 :
   *      interval1 =                          ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
   *      interval2 =                                                       ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
   *      interval1.overlaps(interval2) => false
   *
   * @param {Interval} interval
   * @returns {boolean}
   */
describe('overlaps', function () {
  let inter010 = new Interval(0, 10)
  let inter020 = new Interval(0, 20)
  let inter1020 = new Interval(10, 20)
  let inter50100 = new Interval(50, 100)
  let inter1010 = new Interval(10, 10)
  let inter105 = new Interval(10, 5)

  test('Overlap 0 10 identique => true', () => {
    expect(inter010.overlaps(inter010)).toBe(true)
  })
  test('Overlap 0 10 avec 0 20 => true ', () => {
    expect(inter010.overlaps(inter020)).toBe(true)
  })
  test('Overlap 0 20 avec 0 10 => true ', () => {
    expect(inter020.overlaps(inter010)).toBe(true)
  })
  test('Overlap 0 10 avec 10 20 => false', () => {
    expect(inter010.overlaps(inter1020)).toBe(false)
  })
  test('Overlap 10 20 avec 0 10 => false', () => {
    expect(inter1020.overlaps(inter010)).toBe(false)
  })
  test('Overlap 0 10 avec 50 100 => false', () => {
    expect(inter010.overlaps(inter50100)).toBe(false)
  })
  test('Overlap 50 100 avec 0 10 => false', () => {
    expect(inter50100.overlaps(inter010)).toBe(false)
  })
  test('Overlap 10 10 avec 10 10 => false', () => {
    expect(inter1010.overlaps(inter1010)).toBe(false)
  })
  test('Overlap 10 5 avec 10 10 => false', () => {
    expect(inter105.overlaps(inter1010)).toBe(false)
  })
  test('Overlap 10 10 avec 10 5 => false', () => {
    expect(inter1010.overlaps(inter105)).toBe(false)
  })
})

/**
  * Retourne true si cet interval contient le paramètre interval
  *
  * Exemple 1 :
  *      interval1 =                          ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
  *      interval2 =                                  ▓▓▓▓▓▓▓▓▓▓▓▓▓
  *      interval1.includes(interval2) => true
  *
  * Exemple 2 :
  *      interval1 =                          ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
  *      interval2 =                              ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
  *      interval1.includes(interval2) => false
  *
  * @param {Interval} interval
  * @returns {boolean}
  */
describe('includes', function () {
  let inter010 = new Interval(0, 10)
  let inter020 = new Interval(0, 20)
  let inter1020 = new Interval(10, 20)
  let inter50100 = new Interval(50, 100)
  let inter1010 = new Interval(10, 10)
  let inter510 = new Interval(5, 10)

  test('Includes 0 10 identique => true', () => {
    expect(inter010.includes(inter010)).toBe(true)
  })
  test('Includes 0 10 avec 0 20 => false ', () => {
    expect(inter010.includes(inter020)).toBe(false)
  })
  test('Includes 0 20 avec 0 10 => true ', () => {
    expect(inter020.includes(inter010)).toBe(true)
  })
  test('Includes 0 20 avec 10 20 => true ', () => {
    expect(inter020.includes(inter1020)).toBe(true)
  })
  test('Includes 0 20 avec 50 100 => false ', () => {
    expect(inter020.includes(inter50100)).toBe(false)
  })
  test('Includes 50 100 avec 0 20 => false ', () => {
    expect(inter50100.includes(inter020)).toBe(false)
  })
  test('Includes 5 10 avec 0 20 => false ', () => {
    expect(inter510.includes(inter020)).toBe(false)
  })
  test('Includes 0 20 avec 5 10 => true ', () => {
    expect(inter020.includes(inter510)).toBe(true)
  })
})

/**
 * Retourne l'union de deux intervals
 *
 * Exemple 1 :
 *      interval1 =                          ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
 *      interval2 =                                              ▓▓▓▓▓▓▓▓▓▓▓▓▓
 *      interval1.union(interval2) =>        ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
 *
 * Exemple 2 :
 *      interval1 =                          ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
 *      interval2 =                                                      ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
 *      interval1.union(interval2) =>        ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒   ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
 *
 * @param {Interval} interval
 * @returns {Interval[]}
 */
describe('union', function () {
  let inter010 = new Interval(0, 10)
  let inter020 = new Interval(0, 20)
  let inter1020 = new Interval(10, 20)
  let inter50100 = new Interval(50, 100)
  let inter1010 = new Interval(10, 10)
  let inter510 = new Interval(5, 10)

  test('union 0 10 avec 0 10 => 0 10 ', () => {
    expect(inter010.union(inter010)).toEqual(new Interval(0, 10))
  })
  test('union 0 20 avec 5 10 => 0 20 ', () => {
    expect(inter020.union(inter510)).toEqual(new Interval(0, 20))
  })
  test('union 5 10 avec 0 20 => 0 20 ', () => {
    expect(inter510.union(inter020)).toEqual(new Interval(0, 20))
  })
  test('union 0 10 avec 50 100 => 0 10 50 100 ', () => {
    expect(inter010.union(inter50100)).toEqual(new Interval(new Interval(0, 10), new Interval(50, 100)))
  })
  test('union 50 100 avec 0 10 =>  50 100 0 10 ', () => {
    expect(inter50100.union(inter010)).toEqual(new Interval(new Interval(50, 100), new Interval(0, 10)))
  })
  test('union 50 100 avec 0 10 =>  50 100 0 10 ', () => {
    expect(inter50100.union(inter010)).toEqual(new Interval(new Interval(50, 100), new Interval(0, 10)))
  })
  test('Union 10 10 avec 10 10 => 10 10', () => {
    expect(inter1010.union(inter1010)).toEqual(new Interval(10, 10))
  })
  test('Union 10 10 avec 10 20 => 10 20', () => {
    expect(inter1010.union(inter1020)).toEqual(new Interval(10, 20))
  })
  test('Union 10 20 avec 10 10 => 10 20', () => {
    expect(inter1020.union(inter1010)).toEqual(new Interval(10, 20))
  })
  test('Union 0 10 avec 10 20 => 0 20', () => {
    expect(inter010.union(inter1020)).toEqual(new Interval(0, 20))
  })
  test('Union 10 20 avec 0 10 => 0 20', () => {
    expect(inter1020.union(inter010)).toEqual(new Interval(0, 20))
  })
})

describe('intersection', function () {
  let inter010 = new Interval(0, 10)
  let inter020 = new Interval(0, 20)
  let inter1020 = new Interval(10, 20)
  let inter50100 = new Interval(50, 100)
  let inter1010 = new Interval(10, 10)
  let inter1030 = new Interval(10, 30)
  let inter510 = new Interval(5, 10)
  let inter525 = new Interval(5, 25)

  test('intersection 0 10 avec 0 10 => 0 10 ', () => {
    expect(inter010.intersection(inter010)).toEqual(new Interval(0, 10))
  })
  test('intersection 0 20 avec 5 10 => 5 10 ', () => {
    expect(inter020.intersection(inter510)).toEqual(new Interval(5, 10))
  })
  test('intersection 5 10 avec 0 20 => 5 10 ', () => {
    expect(inter510.intersection(inter020)).toEqual(new Interval(5, 10))
  })
  test('intersection 0 20 avec 5 25 => 5 20 ', () => {
    expect(inter020.intersection(inter525)).toEqual(new Interval(5, 20))
  })
  test('intersection 5 25 avec 0 20 => 5 20 ', () => {
    expect(inter525.intersection(inter020)).toEqual(new Interval(5, 20))
  })
  test('intersection 50 100 avec 0 10 =>  [] ', () => {
    expect(inter50100.intersection(inter010)).toEqual([])
  })
  test('intersection 0 10 avec 50 100 =>  [] ', () => {
    expect(inter010.intersection(inter50100)).toEqual([])
  })
  test('intersection 10 10 avec 10 10 => 10 10', () => {
    expect(inter1010.intersection(inter1010)).toEqual(new Interval(10, 10))
  })
  test('intersection 10 10 avec 10 20 => 10 10', () => {
    expect(inter1010.intersection(inter1020)).toEqual(new Interval(10, 10))
  })
  test('intersection 10 20 avec 10 10 => 10 20', () => {
    expect(inter1020.intersection(inter1010)).toEqual(new Interval(10, 10))
  })
  test('intersection 0 10 avec 10 20 => 0 20', () => {
    expect(inter010.intersection(inter1020)).toEqual(new Interval(10, 10))
  })
  test('intersection 10 20 avec 0 10 => 0 20', () => {
    expect(inter1020.intersection(inter010)).toEqual(new Interval(10, 10))
  })
  test('intersection 0 20 avec 10 30 =>  10 20 ', () => {
    expect(inter020.intersection(inter1030)).toEqual(new Interval(10, 20))
  })
})

describe('exclusion', function () {
  let inter010 = new Interval(0, 10)
  let inter020 = new Interval(0, 20)
  let inter1020 = new Interval(10, 20)
  let inter50100 = new Interval(50, 100)
  let inter1010 = new Interval(10, 10)
  let inter1030 = new Interval(10, 30)
  let inter510 = new Interval(5, 10)
  let inter525 = new Interval(5, 25)

  test('exclusion 0 10 avec 0 10 => [] ', () => {
    expect(inter010.exclusion(inter010)).toEqual([])
  })
  test('exclusion 50 100 avec 0 10 =>  [] ', () => {
    expect(inter50100.exclusion(inter010)).toEqual(new Interval(new Interval(50, 100), new Interval(0, 10)))
  })
  test('exclusion 0 20 avec 5 10 => 5 10 ', () => {
    expect(inter020.exclusion(inter510)).toEqual(new Interval(new Interval(0, 5), new Interval(10, 20)))
  })

  test('exclusion 5 10 avec 0 20 => 5 10 ', () => {
    expect(inter510.exclusion(inter020)).toEqual(new Interval(new Interval(0, 5), new Interval(10, 20)))
  })
  test('exclusion 0 20 avec 5 25 => 5 20 ', () => {
    expect(inter020.exclusion(inter525)).toEqual(new Interval(new Interval(0, 5), new Interval(20, 25)))
  })

  test('exclusion 5 25 avec 0 20 => 5 20 ', () => {
    expect(inter525.exclusion(inter020)).toEqual(new Interval(new Interval(0, 5), new Interval(20, 25)))
  })

  test('exclusion 0 10 avec 50 100 =>  [] ', () => {
    expect(inter010.exclusion(inter50100)).toEqual(new Interval(new Interval(0, 10), new Interval(50, 100)))
  })

  test('exclusion 10 10 avec 10 10 => 10 10', () => {
    expect(inter1010.exclusion(inter1010)).toEqual([])
  })

  test('exclusion 0 10 avec 10 20 => 0 20', () => {
    expect(inter010.exclusion(inter1020)).toEqual(new Interval(new Interval(0, 10), new Interval(10, 20)))
  })
  test('exclusion 10 20 avec 0 10 => 0 20', () => {
    expect(inter1020.exclusion(inter010)).toEqual(new Interval(new Interval(0, 10), new Interval(10, 20)))
  })
  test('exclusion 0 20 avec 10 30 =>  10 20 ', () => {
    expect(inter020.exclusion(inter1030)).toEqual(new Interval(new Interval(0, 10), new Interval(20, 30)))
  })
})
