import Fastify, { FastifyRequest } from "fastify";
import Ajv, { JTDDataType } from 'ajv/dist/jtd'
import { Controllers } from "./presentation/controllers/bills/add-bills-to-pay";
const ajv = new Ajv({ allErrors: false })

const fastify = Fastify({
  logger: false
})

const bodySchema = {
  type: 'object',
  required: ['description'],
  properties: {
    description: { type: 'string' },
    value: { type: 'number' }
  }
} as const

const validate = ajv.compile<Input>(bodySchema);


const result = validate({ description: 'teste', value: 'teste'})
console.log(result)
type Input = JTDDataType<typeof bodySchema>

// fastify.put<{ Params: { id: number }, Body: Input}>('/:id', {
//  schema: {
//   body: bodySchema,
//   params: {
//     type: 'object',
//     properties: {
//       id: { type: 'number' }
//     }
//   }
//  }
// }, async (req, res) => {
//   const x = req.body
//   const y = req.params
  
//  return { description: x.description, value: x.value}
// })

const start = async () => {
  try {
    await fastify.listen({ port: 3000 })
  } catch (error) {
    console.log(error) 
  }
}

start()
