import { Store, StoreConfig } from '@datorama/akita';
import { Token } from '../auth/models/token.model';

export interface Session {
    token: Token;
}

export function initSession(): Session {
    return <Session>{
        token: null
    }
}

@StoreConfig({ name: 'session', resettable: true })
export class SessionStore extends Store<Session> {
    constructor() {
        super(initSession())
    }
}