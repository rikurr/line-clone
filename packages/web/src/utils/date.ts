export type FormattedDate = {
  datetime: string
  isNew: boolean
}

export const formatDate = (d: Date, now: Date): FormattedDate => {
  const dtf = new Intl.DateTimeFormat('ja-JP', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  })
  const [
    { value: day },
    ,
    { value: month },
    ,
    { value: year },
    ,
    { value: hour },
    ,
    { value: minute },
  ] = dtf.formatToParts(d)

  console.log((now.getTime() - d.getTime()) / 1000)
  console.log(24 * 60 * 60)
  const past = (now.getTime() - d.getTime()) / 1000
  const isNew = past < 24 * 60 * 60 * 1
  return {
    datetime: `${year}/${month}/${day} ${hour}:${minute}`,
    isNew,
  }
}
