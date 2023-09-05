type User = {
  id: number
  name: string
}

type Post = {
  id: number
  slug: string
  title: string
}

type CachedUser = {
  value: User
  lastUpdated: Date
}

type CachedPost = {
  value: Post
  lastUpdated: Date
}

type Cached<T> = {
  value: T
  lastUpdated: Date
}

const acceptCachedValue = (input: Cached<unknown>) => {
  console.log(`Value was last updated at ${input.lastUpdated}`)
}

const acceptCachedUser = (input: CachedUser) => {
  console.log(`Value was last updated at ${input.lastUpdated}`)
}

const acceptCachedPost = (input: CachedPost) => {
  console.log(`Value was last updated at ${input.lastUpdated}`)
}

const user: User = {
  id: 1,
  name: 'John Doe',
}

const post: Post = {
  id: 1,
  slug: 'hello-world',
  title: 'Hello World',
}

acceptCachedValue({ value: user, lastUpdated: new Date() })
acceptCachedValue({ value: post, lastUpdated: new Date() })
