import React, {useState, useEffect} from 'react'
import { Card, Avatar } from 'antd';
import './topanime.css'
const Manga = () => {

    const [manga, setManga] = useState([]);
    const { Meta } = Card;
    const GetManga= async ()=>{
        const tmp = await fetch(`https://api.jikan.moe/v3/manga/2/characters`)
        .then(res=>res.json())
        console.log('manga');
        console.log(tmp.characters);
        setManga(tmp.characters);
    }
    useEffect(()=>{
        GetManga();
    },[])

    return (
        <div className="topAnime">
           <div className="title">
               <h2>Manga</h2>

           </div>
           <div className="list">
               {
                   manga.map((m)=>(
                    <a href={m.url}>
                    <div className="itemList">
                    <Card 
            style={{ width: 220 }}
             cover={
            <img
            alt="example"
            src={m.image_url}
            />
        }

        >
        <Meta
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
             title={m.name}
             description={m.role}                 
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

export default Manga
