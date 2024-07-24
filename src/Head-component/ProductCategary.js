import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./Service.css";
const ProductCategary = ({setSrchCat}) => {
    console.log(setSrchCat);
    const param = useParams();
    const productCategary = [
        {
            id: '1',
            key: 'compute',
            img: 'https://d1.awsstatic.com/partner-network/partner_marketing_web_team/Compute_32.bee1aa0c18b32b8f4f594ec75b293c1c1c9e8092.png',
            name: 'Compute',
        },
        {
            id: '2',
            key: 'database',
            img: 'https://d1.awsstatic.com/partner-network/partner_marketing_web_team/Database_32.4c486bfccd1c77227c5e2533bf14ce6889bc9731.png',
            name: 'Database'
        },
        {
            id: '3',
            key: 'storage',
            img: 'https://d1.awsstatic.com/partner-network/partner_marketing_web_team/Storage_32.d5c09d7153f2d4c3fb7d54c74fce88be17e8af16.png',
            name: 'Storage'
        },
        {
            id: '4',
            key: 'container',
            img: 'https://d1.awsstatic.com/partner-network/partner_marketing_web_team/container_32.dc39a615d6586501a56c583a579b9df27d097b45.png',
            name: 'Container'
        },
        {
            id: '5',
            key: 'Web & Mobile Apps',
            img: 'https://d1.awsstatic.com/partner-network/partner_marketing_web_team/squid-ink-Mobile_32.db69f8c5701a7949a7e652f28afba3d877e6003c.png',
            name: 'Web & Mobile Apps'
        },
        {
            id: '6',
            key: 'serverless',
            img: 'https://d1.awsstatic.com/partner-network/partner_marketing_web_team/Serverless_32.dc2af453371bf7a98b5334ab83a758886650f3fc.png',
            name: 'Serverless'
        },
        {
            id: '7',
            key: 'Machine Learning',
            img: 'https://d1.awsstatic.com/partner-network/partner_marketing_web_team/Machine-Learning_Icon_32.0378221697a0a63e46005241c49c11c4ab364f0c.png',
            name: 'Machine Learning'
        },
    ]

    const productCategaryHandler = (e) => {
        console.log(setSrchCat(e));
        return setSrchCat(e);
    }

    return (
        <div className="d-flex mx-5 justify-content-around">
            {/* <ul> */}
                {productCategary.map((val, index) => {
                return  <li alt={val.name} onClick={() => productCategaryHandler(val.key) } className="productCat-size " key={val.id}>
                    <div className="text-center p-1">
                        <img src={val.img}/>
                    </div>
                    <h5 className="">{val.name}</h5>
                </li>
                })}
            {/* </ul> */}
            </div>

    )
}
export default ProductCategary;