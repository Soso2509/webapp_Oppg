export async function updatePost(id, title, body, userId) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      method: 'PUT',
      body: JSON.stringify({
        id,
        title,
        body,
        userId,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  )
  if (response.status === 404) throw new Error(`Post ${id} not found`)
  if (!response.ok) throw new Error(`Failed to update post: ${response.status}`)
}
