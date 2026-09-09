import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '2w38gd43',
    dataset: 'production',
  },
  typegen: {
    path: './src/**/*.{ts,tsx,js,jsx}',
    schema: './src/sanity/extract.json',
    generates: './src/sanity/types.ts'
  },
})