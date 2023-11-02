import DatabaseConnection from "./database-connection"
import { Pool } from "pg"

export default class PgAdapter implements DatabaseConnection {
	private connection: Pool
    
	constructor() {
		this.connection = new Pool({
			connectionString: "postgres://postgres:123456@localhost:5432/marcenaria_db"
		})

		this.connection.on("connect", () => {
			console.log("connected 👌")
		})
	}

	async query(statement: string, params: any): Promise<any> {
		const result = await this.connection.query(statement, params)
		return result.rows
	}
	
	async close(): Promise<void> {
		await this.connection.end()
	}
}