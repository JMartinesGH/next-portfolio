import { postData } from "../posts/postData"

// create object of id for static paths 
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

// returns total number of objects in postdata
export const count = parseInt(postData.length)

// gets the data matching the id
export async function getPostData(id) {
  let singlePostData = postData.filter(post => post.id === id)
  // console.log(singlePostData)
  return {
    ...singlePostData
  }
}