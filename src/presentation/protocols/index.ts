export interface Controller <T = any> {
  handle: (input: T) => Promise<HttpResponse>
}

export interface HttpResponse {
  statusCode: number
  body: any
}
