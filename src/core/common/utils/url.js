import { removeCharFromEnd, removeCharFromStart } from './string'

export const removeSlashFromStart = path => removeCharFromStart(path, '/')

export const removeSlashFromEnd = path => removeCharFromEnd(path, '/')
