import { resolve } from 'q'
import {data} from './data'

export const dataCollector = () => {
    return new Promise ((resolve) => {
        setTimeout(()=> {
            resolve(data)
        }, 2000)
    })
}