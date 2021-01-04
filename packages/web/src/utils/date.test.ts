import { formatDate } from './date'

describe('formatDate', () => {
  const now = new Date('2020-09-15 09:11:32')

  test('今日', () => {
    expect(formatDate(new Date('2020-09-14 09:21:32'), now)).toEqual({
      datetime: '2020/09/14 09:21',
      isNew: true,
    })
  })
})
