
import React, { useState, useEffect } from 'react'
import { Card, Avatar } from 'antd';
import './topanime.css';

const TopAnime = () => {

    const [topAnime, setTopAnime] = useState([]);
    const { Meta } = Card;

    const GetTopAnime = async () => {
        const temp = await fetch(`https://api.jikan.moe/v3/top/anime/1/bypopularity`)
        .then(res=>res.json());
        setTopAnime(temp.top);
        console.log(temp.top);
    }
   

    useEffect(()=>{
        GetTopAnime();
        console.log("Top Anime");
    },[])

    return (
        <div className="topAnime">
            <div className="title">
                <h2>Top Anime</h2>
            </div>
            <div className="list">
                {
                    topAnime.map((a)=>(
                        <a href={a.url}>
                        <div className="itemList">
                        <Card 
                style={{ width: 220 }}
                 cover={
                <img
                alt="example"
                src={a.image_url}
                />
            }
    
            >
            <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                 title={a.title}
                 description={a.type}                 
             />
            </Card>
            </div>
            </a>
                    ))
                }
            
            </div>
        </div>
    )
}

export default TopAnime
