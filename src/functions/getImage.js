const getImage = (fileName) => {
  const path = 'https://firebasestorage.googleapis.com/v0/b/tutorial1-b3b25.appspot.com/o'
  const url = `${path}/${fileName}?alt=media`
  return url
}

export default getImage
