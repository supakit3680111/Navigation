import { FaHome , FaUser , FaShoppingCart } from "react-icons/fa";


const MenuData = [
    {
        title:"หน้าแรก",
        path:"/",
        icon:<FaHome/>
    },
    {
        title:"สมาชิก",
        path:"/member",
        icon:<FaUser/>
    },
    {
        title:"สินค้า",
        path:"/product",
        icon:<FaShoppingCart/>
    }
]

export default MenuData