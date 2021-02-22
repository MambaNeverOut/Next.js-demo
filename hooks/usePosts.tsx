import axios from "axios";
import { useEffect, useState } from "react";


export const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false)
  useEffect(()=>{
    setIsLoading(true)
    axios.get('/api/v1/posts').then(response => {
      setPosts(response.data)
      setIsLoading(false)
      if(response.data.length === 0){
        setIsEmpty(true)
      }
    })
  },[])
  return {posts, setPosts, isLoading, setIsLoading, isEmpty, setIsEmpty}
}