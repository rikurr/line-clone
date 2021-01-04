export type FormattedDate = {
  datetime: string | null
  isNew: boolean
}

export const formatDate = (d: Date | null, now: Date): FormattedDate => {
  if (!d) {
    return {
      datetime: null,
      isNew: false,
    }
  }
  const dtf = new Intl.DateTimeFormat('ja-JP', {
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  })
  const [
    { value: month },
    ,
    { value: day },
    ,
    { value: hour },
    ,
    { value: minute },
  ] = dtf.formatToParts(d)

  const past = (now.getTime() - d.getTime()) / 1000
  const isNew = past < 24 * 60 * 60
  return {
    datetime: isNew ? `${hour}:${minute}` : `${month}/${day} ${hour}:${minute}`,
    isNew,
  }
}
