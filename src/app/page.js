import Image from "next/image";
import img01 from "/public/book_images/react.jpg"
export default function Home() {
  return (
    <>
      <h1>WelCome</h1>
      <h2>Hello, WEB~~</h2>
      {/* 해당 이미지를 따로 import 하지 않으면 width, height는 반드시 지정 */}
      <p><Image src="/book_images/domain.jpg" alt="" width={100} height={100}/></p>
      
      {/* 넢이와 높이는 선택사항이다. */}
      <p><Image src={img01} alt=""  /></p>
      <p><Image src={img01} alt="" width={100} height={100}  /></p>
    </>
  );
}
