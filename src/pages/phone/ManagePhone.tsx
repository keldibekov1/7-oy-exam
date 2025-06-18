import { RiDeleteBin6Line } from "react-icons/ri";
import { usePhone } from "../../api/features/hooks/usePhone";
import { CiEdit } from "react-icons/ci";

const ManagePhone = () => {
  const { getPhone,deletePhone } = usePhone();
  const { data } = getPhone;
  return (
    <div className="ml-8">
      <div>
        <h2 className="text-2xl text-[#427DC0] m-5">Manage Phone</h2>
      </div>
      <div className="flex flex-wrap gap-6">
        {data?.data?.map((phone: any) => (
          <div
            key={phone.id}
            className="bg-white  h-[395px] rounded-lg shadow-md p-4 w-56 flex flex-col items-center"
          >
           <div className="w-[173px] h-[216px]">
             <img
              src={phone.img}
              alt={phone.tittle}
              className="w-full object-cover rounded mb-3"
            />
           </div>
            <p className="mt-5">{phone.tittle}</p>
            <p className="text-[#427DC0]">{phone.price} USD</p>
            <div className="flex gap-3 mt-4">
              <button  onClick={() => deletePhone.mutate(phone.id)} className="bg-[#427DC0] rounded-2xl w-8 h-8 flex items-center justify-center hover:bg-blue-700 transition">
                <RiDeleteBin6Line className="text-white" />
              </button>
              <button className="bg-white border border-blue-400 rounded-2xl w-8 h-8 flex items-center justify-center hover:bg-blue-50 transition">
                <CiEdit className="text-blue-400" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManagePhone;