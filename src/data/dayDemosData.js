const requireFile = (filename)=>{
  return require(`./days/${filename}`)
}

export default [
  'day-01',
  'day-02',
  'day-03',
  'day-04',
  'day-05',
  'day-06',
  'day-07'
].map( fileX => requireFile(fileX).default)
