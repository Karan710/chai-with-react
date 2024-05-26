import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Github() {
  const [data, setData] = useState([])
  const {githubId} = useParams()
  useEffect(()=>{
    fetch(`https://api.github.com/users/${githubId}`)
    .then((res)=>res.json())
    .then(data=>{setData(data);
      console.log(data)
    }
  )
  }, [])

  return (
    <div className="text-center m-4 text-2xl bg-purple-200">
      Github Followers: {data.followers}
      <div className="size-36"> <img src={data.avatar_url} alt="Github Profile Picture" /></div>
    </div>
  )
}

export default Github
