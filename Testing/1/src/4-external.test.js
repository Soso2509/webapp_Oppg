import { updatePost } from './4-external'

it('should update a post', async () => {
  await updatePost(1, 'foo', 'bar', 1)
})

it('should throw an error if the post does not exist', async () => {
  await expect(updatePost(999, 'foo', 'bar', 1)).rejects.toThrow(
    'Post 999 not found',
  )
})

it('should throw an error if the request fails', async () => {
  await expect(updatePost(1, 'foo', 'bar', 999)).rejects.toThrow(
    'Failed to update post: 500',
  )
})
