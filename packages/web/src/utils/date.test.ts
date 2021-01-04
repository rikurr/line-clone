import { formatDate } from './date'

describe('formatDate', () => {
  const now = new Date('2020-09-14 10:21:32')

  test('一週間経過', () => {
    expect(formatDate(new Date('2020-09-14 09:21:32'), now)).toEqual({
      datetime: '2020/09/14 09:21',
      isNew: true,
    })
  })
})
