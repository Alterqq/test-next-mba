export const getShortDate = (date) => {
  const splitDate = date.toLocaleDateString().split('.')
  splitDate[2] = splitDate[2].slice(2)
  return splitDate.join('.')
}

export const getDuration = (d) => {
  const h = Math.floor(d / 3600);
  const m = Math.floor(d % 3600 / 60);
  const s = Math.floor(d % 3600 % 60);
  const hDisplay = h > 0 ? h + ':' : "";
  const mDisplay = m >= 0 ? m + ':' : "";
  const sDisplay = s > 0 ? s : "";
  return hDisplay + mDisplay + sDisplay;
}


