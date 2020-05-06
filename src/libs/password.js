import crypto from 'crypto'
import { GetID } from '../generators/generators'

export function HashPass(raw, salt = GetID(10), interactions = 1000, keylen = 16, digest = 'sha512') {

    const _hash = crypto.pbkdf2Sync(raw, salt, interactions, keylen, digest)
    const hash = _hash.toString('hex')
    const encrypted = `${salt}&${hash}&${interactions}&${keylen}&${digest}`

    return {
        interactions,
        hash: hash,
        salt: salt,
        keylen,
        digest,
        encrypted,
    }

}
