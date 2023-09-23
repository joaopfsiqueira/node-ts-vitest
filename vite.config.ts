import { defineConfig } from 'vitest/config'

export default defineConfig({
    test: {
        coverage: {
            branches: 90,
            functions: 90,
            lines: 90,
            statements: 90,
        },
    },
})
