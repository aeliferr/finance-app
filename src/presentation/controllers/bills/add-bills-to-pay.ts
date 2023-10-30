import { FastifyReply, FastifyRequest } from "fastify"
import { Controller, HttpResponse } from "../../protocols"

type AddBillsToPay = {
  description: string
  value: number
  dueDate: Date
}

export namespace Controllers {
  export class AddBillsToPay {
    async handle(request: FastifyRequest, reply: FastifyReply): Promise<void> {
      reply.send()
    } 
  }
}
