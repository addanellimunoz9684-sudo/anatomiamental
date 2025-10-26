import { useState, useEffect } from 'react'
import type { Post } from '../types'
import * as api from '../utils/api'

export function usePosts() {
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    try {
      const p = api.fetchPosts()
      setPosts(p)
      console.log('Posts loaded:', p.length)
    } catch (error) {
      console.error('Error loading posts:', error)
      setPosts([])
    }
  }, [])

  function getPostById(post: Post) {
    return posts.find((p: Post) => p.id === post.id) ?? null
  }

  function addPost(data: Omit<Post, 'id' | 'createdAt'>) {
    const newPost = api.createPost(data)
    setPosts((currentPosts: Post[]) => [newPost, ...currentPosts])
    return newPost
  }

  return {
    posts,
    getPostById,
    addPost
  }
}