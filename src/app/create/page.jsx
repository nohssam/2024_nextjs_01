import Image from "next/image";
import img1 from "/public/book_images/spring.jpg"
export default function Create(){
    return(
        <>
            Create!! ~~page
            <p><Image  src={img1} width={100} height={100} /></p>
        </>
    )
}