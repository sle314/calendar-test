import { LOCAL_STORAGE_PREFIX } from '../constants'

export const getPrefixedKey = key =>
  `${LOCAL_STORAGE_PREFIX ? `${LOCAL_STORAGE_PREFIX}:` : ''}${key}`
