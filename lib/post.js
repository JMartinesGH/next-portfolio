import { postData } from "../posts/postData"

export function getAllPostIds() {
  const ids = postData.map(item => item.id)
  
  return ids.map(id => {
    return {
      params: {
        id: id
      }
    }
  })
}

export async function getPostData(id) {
  let singlePostData = postData.filter(post => post.id === id)
  // console.log(singlePostData)
  return {
    ...singlePostData
  }
}