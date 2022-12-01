import dotenv from 'dotenv/config'
import {v2} from 'cloudinary'

export const database = "railway"
export const username = "postgres"
export const password = "Fm2xRLqY6Y8MIE6Kilg9"
export const host = 'containers-us-west-61.railway.app'
export const dialect = "postgres"
export const port = 6735

export const cloudinary = v2

cloudinary.config({
    cloud_name: 'jorge-tarifa',
    api_key: '984487691413983',
    api_secret: 'jCsjzSl3-dYjd3UZ0ZpWZ01x7Hw'
});