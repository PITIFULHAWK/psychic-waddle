import { DocumentTextIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    // Title field
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The title of the blog post',
      validation: (Rule) => Rule.required().max(100).warning('Keep titles concise.'),
    }),
    // Slug field
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'URL-friendly identifier for the blog post',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    // Author reference
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      description: 'The author of the blog post',
      to: { type: 'author' },
    }),
    // Main Image with Alt Text
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      description: 'Main image for the blog post',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          description: 'A brief description of the image for accessibility',
          validation: (Rule) => Rule.required().warning('Add alternative text for better accessibility.'),
        }),
      ],
    }),
    // Categories (Array of References)
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      description: 'Categories related to the blog post',
      of: [defineArrayMember({ type: 'reference', to: { type: 'category' } })],
    }),
    // Published At (Datetime)
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      description: 'Publishing date of the blog post',
      validation: (Rule) => Rule.required(),
    }),
    // Body (Rich Text Content)
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      description: 'Main content of the blog post',
      of: [
        defineArrayMember({ type: 'block' }), // Default text blocks
        defineArrayMember({ type: 'image', options: { hotspot: true } }), // Inline images
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const { author } = selection
      return {
        ...selection,
        subtitle: author ? `by ${author}` : 'No author assigned',
      }
    },
  },
})
