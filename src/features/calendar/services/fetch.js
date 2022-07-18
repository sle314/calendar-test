import { removeSlashFromEnd, removeSlashFromStart } from 'core/common'

import { API_BASE_URL } from '../constants'

export const calendarFetch =
  (fetchInstance = fetch) =>
  (path, options) =>
    fetchInstance(`${removeSlashFromEnd(API_BASE_URL)}/${removeSlashFromStart(path)}`, options)
