export const validationError = (response: any, message: string) => {
  response.status = 400
  response.body = {
    success: false,
    message,
  }
}
