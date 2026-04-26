// Cypress E2E support file — auth via spa_utils (JWT + localStorage, no login UI).

import { registerAuthCommands } from '@coaigo/impact_spa_utils/cypress/registerAuthCommands'

registerAuthCommands({ visitPath: '/' })

export {}