import ComponentCard from '@/components/common/ComponentCard';
import React, { use, useEffect } from 'react'

const SetExam = ({ data }: any) => {
    const [examSelect, setExamSelect] = React.useState(Object.keys(data?.data)[0])
    const [search, setSearch] = React.useState("")
    console.log(data);

    return (
        <ComponentCard title="Danh sách sinh viên theo từng môn" desc={`Các sinh viên bị trùng lặp trong 1 mã học phần sẽ bị loại bỏ, tổng số sinh viên: ${data?.data},tổng số file: ${data?.total_files}, tổng số file lỗi: ${data?.total_files_valid}`} className="w-full flex-1">
            <div className="transition">
                <div className="tabs">
                    <div className="flex justify-between">
                        <ul className="flex transition-all duration-300 p-2 overflow-hidden flex-wrap">
                            {Object.keys(data?.data).map((item: string, index: number) => (
                                <li onClick={() => setExamSelect(item)} key={index} className="mr-2">
                                    <div className={`inline-block mr-5   rounded-2xl py-2 px-4 hover:text-[#736ed9] font-medium  tab-active:bg-white  active tablink whitespace-nowrap ${item === examSelect && "bg-[#e0e7ff] text-[#736ed9]"}`} >{item} </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="mt-3">
                        <div className="overflow-hidden">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead>
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">STT</th>
                                        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Mã sinh viên</th>
                                        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Họ</th>
                                        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Tên</th>
                                        <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase">Đủ Điều kiện dự thi</th>
                                        <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase">Email</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data?.data[examSelect].map((item: any, index: number) => (
                                        <tr className="odd:bg-white hover:bg-[#f5f5f5] even:bg-gray-100">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">{index + 1}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">{item.student_id}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{item.first_name}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{item.last_name}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                                {item.eligible_for_exam === 1 ? "có" : "không có"}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                                {item.notes}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            {/* </div> */}
        </ComponentCard >
    )
}

export default SetExam