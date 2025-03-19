import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Ecommerce Website',

  projectId: 'qx635353',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],
  preview: {
    url: 'https://e-commerce-website-three-vert.vercel.app/', 
  },

  schema: {
    types: schemaTypes,
  },
})
