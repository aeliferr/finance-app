/* eslint-disable @typescript-eslint/ban-types */
import HttpServer from './http-server'
import fastify, { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import cors from '@fastify/cors'

export default class FastifyAdapter implements HttpServer {
	app: FastifyInstance
	constructor() {
		this.app = fastify()
		this.app.register(cors, {
			logLevel: 'error'
		})
	}

	onGetOn(url: string, callback: Function): void {
		this.app.get(url, async (req: FastifyRequest, res: FastifyReply) => {
			const result = await this.callFunction(req, res, callback)
			return result
		})
	}

	onPostOn(url: string, callback: Function): void {
		this.app.post(url, async (req: FastifyRequest, res: FastifyReply) => {
			const result = await this.callFunction(req, res, callback)
			return result
		})
	}

	onPutOn(url: string, callback: Function): void {
		this.app.put(url, async (req: FastifyRequest, res: FastifyReply) => {
			const result = await this.callFunction(req, res, callback)
			return result
		})
	}

	onDeleteOn(url: string, callback: Function): void {
		this.app.delete(url, async (req: FastifyRequest, res: FastifyReply) => {
			const result = await this.callFunction(req, res, callback)
			return result
		})
	}

	listen(port: number): void {
		this.app.listen({
			port,
		}, () => {
			console.log(`server listening on port ${port} ✔😃👍`)
		})
	}

	private async callFunction (req: FastifyRequest, res: FastifyReply, callback: Function){
		try {
			const output = await callback(req.params, req.body)
			return output
		} catch (error: any) {
			res.status(422).send(error.message)
		}
	}
}