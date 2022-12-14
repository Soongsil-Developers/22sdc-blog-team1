import React from 'react'
import ArticleList from './ArticleList'
import Populartags from './Populartags'
import { useRecoilValue } from 'recoil'
import { authState, userState } from '../atoms/auth'
import { useEffect,useState } from 'react'
import { getGlobalArticles,getGlobalLoginArticles } from '../remote/index'

const Home = () => {
    let [articleData,setArticleData] = useState([])
    const auth = useRecoilValue(authState)
    const user = useRecoilValue(userState)
    
    useEffect(()=>{
        auth?(getGlobalLoginArticles()
        .then(res=>{
            setArticleData(res.data.articles)
        }).catch(err=>{
            console.log(err)
        })):
        (getGlobalArticles()
        .then(res=>{
            setArticleData(res.data.articles)
        }).catch(err=>{
            console.log(err)
        }))

    },[auth])


    const tag = []
    for(let i=0; i<articleData.length; i++){
        for(let k=0; k<articleData[i].tagList.length; k++){
            tag.push(articleData[i].tagList[k])
        } 
    }
   const tags = [...new Set(tag)]


  return (
    <div className="home-page">

    <div className="banner" style={auth?{display:'none'}:{display:'flex'}}>
        <div className="container">
            <h1 className="logo-font">conduit</h1>
            <p>A place to share your knowledge.</p>
        </div>
    </div>

    <div className="container page">
        <div className="row">

            <div className="col-md-9">
                <div className="feed-toggle">
                    <ul className="nav nav-pills outline-active">
                        <li className="nav-item">
                            <a className="nav-link active" href="">Global Feed</a>
                        </li>
                    </ul>
                </div>

                {articleData.map((data)=><ArticleList data={data}/>)}

                
            </div>
            <Populartags tags={tags} />
        </div>
    </div>

</div>
  )
}

export default Home