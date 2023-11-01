import UsecaseFactory from "@/application/factory/usecase-factory"
import HttpServer from "../http-server"

export default class BillToPayController {
	/**
     *
     */
	constructor(httpServer: HttpServer, usecaseFactory: UsecaseFactory) {
		httpServer.onPostOn("/bill-to-pay", async (params: any, body:any) => {
			const output = await usecaseFactory.createAddBillToPay().execute(body)
			console.log(output)
			return output
		})

		httpServer.onGetOn("/bill-to-pay/:id",async (params: any) => {
			const output = await usecaseFactory.createGetBillToPay().execute(params)
			return output
		})
	}
}