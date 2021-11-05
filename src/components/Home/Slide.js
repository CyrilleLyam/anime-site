import { Carousel } from 'antd';
import './slide.css'
const Slide = () => {

    const items = [
        {id:1, url:"https://img4.hulu.com/user/v3/artwork/c7a08df6-d0d5-4dd3-afff-d1f90133cd4e?base_image_bucket_name=image_manager&base_image=31f90904-d759-496c-82e2-b4c9c145f36a&region=US&format=jpeg&size=952x536",},
        {id:2, url:"https://media.pocketgamer.com/artwork/na-31038-1585158847/bleach-immortal-soul-ios-artwork-key-art.jpg",},
        {id:3, url:"https://img3.hulu.com/user/v3/artwork/9c91ffa3-dc20-48bf-8bc5-692e37c76d88?base_image_bucket_name=image_manager&base_image=747157b1-4581-414a-959f-c4956ebc3349&size=1200x630&format=jpeg"}
    ];
      
    return (
        <div className="slide">
            <Carousel autoplay>
                {items.map((item)=>(
                    <div className="d" key={item.id}>
                    <img className="Img" src={item.url} alt="" />
                    </div>     
                ))}
            </Carousel>
        </div>
    )
}

export default Slide
