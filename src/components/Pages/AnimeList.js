import React, {useState, useEffect} from 'react'
import './a.css'
import { Row, Col } from 'antd';
import { Card, Avatar } from 'antd';

const AnimeList = () => {
    const { Meta } = Card;
    const [anime, setAnime] = useState([]);

    const GetAnime = async()=>{
        const tmp = await fetch(`https://api.jikan.moe/v3/top/anime/1/upcoming`)
        .then(res=>res.json())
        console.log(tmp.top);
        setAnime(tmp.top)
    }
    useEffect(()=>{
        GetAnime();
    
    },[])

    return (
        <div className="Anime">
             <div><h1 className="title">Anime </h1></div>
             <div className="list">
             <Row gutter={[24, 24]}>
             {anime.map(a=>(
                <div className="animeList" key={a.mal_id}>
                    <a href={a.url}>
                        <Col span={6}>
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
             description={a.title_romanji}                 
         />
        </Card>
                        </Col>
                        </a>
                        </div>
                   
                ))}
                 </Row> 
             </div>
        </div>
    )
}


export default AnimeList

