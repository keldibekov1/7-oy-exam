import { useState } from "react";
import { useColor } from "../../api/features/hooks/useColor";
import { usePhone } from "../../api/features/hooks/usePhone";

const CreatePhone = () => {
  const [form, setForm] = useState({
    tittle: "",
    price: "",
    img: "",
    color: "",
    desc: "",
  });

  const { getColor } = useColor();
  const { createPhone } = usePhone();

  const { data } = getColor;

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    await createPhone.mutate(form);
    setForm({
      tittle: "",
      price: "",
      img: "",
      color: "",
      desc: "",
    });
  } catch (error) {
    console.log(error);
   
  }
};



  return (
    <div className=" w-[620px] flex-1 p-8 overflow-auto bg-white">
      <h2 className="text-2xl  text-[#427DC0] mb-6">Create phone</h2>
      <form onSubmit={handleSubmit} className="space-y-4 w-[620px]">
        <div>
          <label>Title</label>
          <input
            type="text"
            name="tittle"
            value={form.tittle}
            onChange={handleChange}
            className="w-full mt-1 px-4 py-2 bg-[#F8F8F8] rounded"
          />
        </div>
        <div>
          <label>Price</label>
          <input
            type="number"
            name="price"
            value={form.price}
            onChange={handleChange}
            className="w-full mt-1 px-4 py-2 bg-[#F8F8F8] rounded"
          />
        </div>
        <div>
          <label>Image-url</label>
          <input
            type="text"
            name="img"
            value={form.img}
            onChange={handleChange}
            className="w-full mt-1 px-4 py-2 bg-[#F8F8F8] rounded"
          />
        </div>
        <div>
          <label>Color</label>
          <select
            name="color"
            value={form.color}
            onChange={handleChange}
            className="w-full mt-1 px-4 py-2 bg-[#F8F8F8] rounded"
          >
            <option value="">Select color</option>
            {data?.data?.map((color: any) => (
              <option key={color.id} value={color.name}>
                {color.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Desc</label>
          <textarea
            name="desc"
            value={form.desc}
            onChange={handleChange}
            className="w-full h-[164px] mt-1 px-4 py-2 bg-[#F8F8F8] rounded "
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-[#427DC0] w-[180px] h-[46px] text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default CreatePhone;
