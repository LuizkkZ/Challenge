const findOneCep = require('./request/findCep')

async function returnCep() {
  const location = await findOneCep.findCep('05877160')
  console.log(location)
}

returnCep()