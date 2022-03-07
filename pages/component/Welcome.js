import Image from "next/image";
import imgCover from '../../public/img/hi.jpg'

export default function Welcome() {
  return (
    <div className="p-3">
      <style jsx="true">
        {`
          p {
            font-size: 1rem;
            line-height: 1rem;
          }
        `}
      </style>
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:shrink-0">
            <Image
              src={imgCover}
              layout="responsive"
              width={720}
              height={480}
              className="card-img-top"
              alt="..."
            ></Image>
          </div>
          <div className="p-6">
            <span className="block mt-1 text-md leading-tight font-medium text-black hover:underline">
              หลักเกณฑ์ที่สามารถกักตัวที่บ้านได้ มีดังนี้
            </span>
            <p className="mt-2 text-slate-500">
              {"1. ต้องมีอายุน้อยกว่า 60 ปี ไม่มีอาการ"}
            </p>
            <p className="mt-2 text-slate-500">
              {
                "2. มีสุขภาพร่างกายแข็งแรง อยู่คนเดียว หรือ มีผู้อยู่ร่วมที่พักไม่เกิน 1 คน"
              }
            </p>
            <p className="mt-2 text-slate-500">
              {
                "3. ไม่มีภาวะอ้วน (ภาวะอ้วน หมายถึง ดัชนีมวลกาย > 30 กก./ม.2 หรือ น้ำหนักตัว > 90 กก.)"
              }
            </p>
            <p className="mt-2 text-slate-500">
              {
                "4. ที่สำคัญที่สุด ไม่ป่วย โรคปอดอุดกั้นเรื้อรัง, โรคไตเรื้อรัง, โรคหัวใจและหลอดเลือด โรคหลอดเลือดสมอง โรคเบาหวานที่ควบคุมไม่ได้ และโรคอื่นๆ ตามดุลยพินิจของแพทย์"
              }
            </p>
            <p className="mt-2 text-slate-500">
              {"5. ผู้ป่วยยินยอมแยกตัวในที่พักของตนเองอย่างเคร่งครัด"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
