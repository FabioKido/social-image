const { v4: uuidv4 } = require('uuid')

const {db} = require('./config')

exports.publish = async (body, styles) => {

  let result
  let id

  while (!result) {
    id = uuidv4()
    try {
      result = await db.collection('templates').doc(id).set({
        body,
        styles
      })

      console.log(`Created template with id ${id}`);
    } catch {
      console.warn(`Template with id ${id} already exists, trying another...`);
    }
  }

  return {
    template: id,
  }
}
