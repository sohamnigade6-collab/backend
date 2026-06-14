import { handle } from 'hono/vercel'
import app from '../backend/src/app.ts'

export const config = {
    runtime: 'nodejs',
    maxDuration: 60,
}

export default handle(app)
