const requireFile = (filename)=>{
  return require(`./days/${filename}`)
}

export default [
  'day-01',
  'day-02',
  'day-03',
  'day-04'
].map( fileX => requireFile(fileX).default)
