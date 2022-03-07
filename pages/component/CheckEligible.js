import { useState } from "react"
import Image from "next/image";
import imgCover from '../../public/img/logo.png'
import axios from "axios"
import Swal from "sweetalert2"
import endpoint from "../config/Endpoint.json"

export default function CheckEligible() {
	const [citizenId, setCitizenId] = useState(null)
	const [phoneNumber, setPhoneNumber] = useState(null)

	const postToCheck = async () => {
		const headers = {
			Accept: "*/*",
			"Content-Type": "application/json",
		}
		const data = {
			citizenId: citizenId,
			phoneNumber: phoneNumber,
		}
		await axios.post(endpoint.endpoint.checkEligible, data, { headers })
    .then((res) => {
      if(res.status === 200){
        window.sessionStorage.setItem("personDetail", JSON.stringify(res.data))
        Swal.fire({
          title: "ตรวจสอบสิทธิ์สำเร็จ",
          html:'<p>ท่านได้ลงทะเบียนกับ 1506 ไว้แล้ว</p><p>เข้าสู่ขั้นตอนกรอกข้อมูล</p>',
          icon: "success",
          confirmButtonColor: "#119516",
          confirmButtonText: "ตกลง",
        }).then((result) => {
          if (result.isConfirmed) {
            console.log('redirect')
          }
        })
      }
      else {
        Swal.fire({
          title: "ตรวจสอบสิทธิ์ไม่สำเร็จ",
          html:'<p>ท่านยังไม่ได้ลงทะเบียนกับเจ้าหน้าที่</p><p>กรุณาโทรติดต่อ 1506</p>',
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          confirmButtonText: "โทร 1506",
          cancelButtonColor:'#d33',
          cancelButtonText:"ปิด"
        }).then((result) => {
          if (result.isConfirmed) {
            console.log('tel 1506')
          }
          else{
            console.log('close')
          }
        })
      }
		})
    .catch((err) => {
      console.log(err)
    })
	}

	const onCitizenChange = (e) => {
		setCitizenId(e.target.value)
	}

	const onPhoneChange = (e) => {
		setPhoneNumber(e.target.value)
	}

	return (
		<div className='grid place-items-center py-8'>
     
            <Image
              src={imgCover}
              // layout="intrinsic"
              // className="my-3"
              width={60}
              height={60}
              alt="..."
            ></Image>
        
			<span className="text-xl m-2">กรอกข้อมูลเพื่อตรวจสอบสิทธิ์</span>
			<div className='flex flex-col items-center'>
				<input
					type='text'
					maxLength={13}
					className='border-slate-300 rounded-md text-lg shadow-md placeholder-slate-400
          focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500  text-center p-2 my-2'
					placeholder='กรอกเลขบัตรประชาชน'
					onChange={(e) => {
						onCitizenChange(e)
					}}></input>
				<input
					type='tel'
					maxLength={10}
					className='border-slate-300 rounded-md text-lg shadow-md placeholder-slate-400
          focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500  text-center p-2 my-2'
					placeholder='กรอกเบอร์โทรที่แจ้งไว้'
					onChange={(e) => {
						onPhoneChange(e)
					}}></input>
				<button
					type='button'
					className='inline-block px-10 py-3 w-auto text-white bg-blue-500 hover:bg-blue-700 rounded-full 
          active:shadow-lg transition duration-150 ease-in-out my-2'
					onClick={postToCheck}>
					ตรวจสอบสิทธิ์
				</button>
			</div>
			<hr />
		</div>
	)
}
