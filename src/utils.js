export const getShortDate = (date) => {
  const splitDate = date.toLocaleDateString().split('.')
  splitDate[2] = splitDate[2].slice(2)
  return splitDate.join('.')
}

export const getTime = (d) => {
  const h = Math.floor(d / 3600);
  const m = Math.floor(d % 3600 / 60);
  const s = Math.ceil(d % 3600 % 60);
  const hDisplay = h > 0 ? h + ':' : "";
  let mDisplay
  let sDisplay

  if (m >= 0 && String(m).length === 1) mDisplay = '0' + m + ':'
  else if (m >= 0 && String(m).length > 1) mDisplay = m + ':'
  else mDisplay = ''

  if (s >= 0 && String(s).length === 1) sDisplay = '0' + s
  else if (s >= 0 && String(s).length > 1) sDisplay = s
  else sDisplay = ''

  return hDisplay + mDisplay + sDisplay;
}

export const getSeconds = (str) => {
  const arr = str.split(':')
  let h, m, s
  if (arr.length === 3) {
    h = +arr[0] * 3600
    m = +arr[1] * 60
    s = +arr[3]
  } else if (arr.length === 2 && arr[0] !== '00') {
    h = 0
    m = +arr[0] * 60
    s = +arr[1]
  } else {
    h = 0
    m = 0
    s = +arr[1]
  }

  return h + m + s
}

export const downloadFile = (data) => {
  let a = document.createElement("a");
  let file = new Blob([data], {type: 'application/json'});
  a.href = URL.createObjectURL(file);
  a.download = "note.txt";
  a.click();
}

