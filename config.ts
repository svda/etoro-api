import { config } from 'https://deno.land/x/dotenv/mod.ts'

const envConfig = config()

export function loadNumber (variable: string | undefined, defaultValue: number): number {
  return (variable && !isNaN(Number(variable))) ? Number(variable) : defaultValue
}

interface AppSettings {
  port: number
}

const settings: AppSettings = {
  port: loadNumber(envConfig.PORT, 8080)
}

export default settings
