import { useState } from "react";
import { useColor } from "../../api/features/hooks/useColor";
import { RiDeleteBin6Line } from "react-icons/ri";

const CreateColor = () => {
  const { getColor, deleteColor, createColor } = useColor();
  const { data } = getColor;

  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createColor.mutate({ name });
    setName("");
  };

  return (
    <div>
      <div className="flex-1 p-8 bg-white">
        <h2 className="text-2xl  text-[#427DC0]">Create color</h2>
        <form className="w-[620px] h-[167px] pt-[33px]" onSubmit={handleSubmit}>
          <div>
            <label className=" ">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full mt-1 px-4 py-2 bg-[#F8F8F8] rounded"
            />
          </div>
          <button
            type="submit"
            className="bg-[#427DC0] w-[180px] h-[46px] mt-[29px] text-white px-6 py-2 rounded"
          >
            Create
          </button>
        </form>
      </div>
      <div>
        <div className="flex flex-wrap gap-4 p-8">
          {data?.data?.map((item: any) => (
            <div
              className="flex items-center justify-between w-64 h-16 px-4 py-2 bg-white rounded shadow"
              key={item.id}
            >
              <p className="text-black">{item.name}</p>

              <div className="bg-[#427DC0] rounded-2xl w-8 h-8 flex items-center justify-center">
                <RiDeleteBin6Line
                  className="text-white"
                  onClick={() => deleteColor.mutate(item.id)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CreateColor;
