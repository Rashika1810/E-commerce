import React, { useState } from "react";
import { IoCloudUploadSharp } from "react-icons/io5";
import { ImageToBase64 } from "../utility/ImageToBase64";
import { toast } from "react-hot-toast";
const NewProduct = () => {
  const [data, setData] = useState({
    pname: "",
    category: "",
    price: "",
    description: "",
    image: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const { pname, category, price, description, image } = data;

    if (pname && category && price && description && image) {
      const fetchData = await fetch(
        `${process.env.REACT_APP_SERVER_DOMAIN}/createProduct`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const respData = await fetchData.json();
      console.log(respData);
      toast(respData.message);
    } else {
      toast("Enter all product details");
    }

    setData(() => {
      return {
        pname: "",
        category: "",
        price: "",
        description: "",
        image: "",
      };
    });
  };

  const uploadImage = async (e) => {
    const data = await ImageToBase64(e.target.files[0]);
    console.log(data);
    setData((preve) => {
      return {
        ...preve,
        image: data,
      };
    });
  };

  return (
    <div className="p-4">
      <form
        className="m-auto w-full max-w-md shadow flex flex-col p-3 bg-white"
        onSubmit={handleOnSubmit}
      >
        <label htmlFor="pname" className="text-indigo-500">
          Product Name
        </label>
        <input
          type="text"
          id="pname"
          name="pname"
          value={data.pname}
          className="w-full px-2 py-1 rounded bg-violet-200 mt-2 mb-3 outline-none"
          onChange={handleOnChange}
        />
        <label htmlFor="category" className="text-indigo-500">
          Category
        </label>
        <select
          value={data.category}
          className="w-full px-2 py-2 rounded bg-violet-200 mt-2 mb-3 outline-none"
          id="category"
          name="category"
          onChange={handleOnChange}
        >
          <option value={"Others"} className="bg-white">
            Select category
          </option>
          <option value={"Groceries"} className="bg-white">
            Groceries
          </option>
          <option value={"Fruits"} className="bg-white">
            Fruits
          </option>
          <option value={"Vegetables"} className="bg-white">
            Vegetables
          </option>
          <option value={"Pizza"} className="bg-white">
            Pizza
          </option>
          <option value={"Ice-cream"} className="bg-white">
            Ice-cream
          </option>
          <option value={"Dosa"} className="bg-white">
            Dosa
          </option>
          <option value={"Special_Offers"} className="bg-white">
            Special_Offers
          </option>
        </select>
        <label htmlFor="image" className="text-indigo-500 ">
          Image
          <div className="h-40 w-full bg-violet-200 rounded flex items-center justify-center cursor-pointer">
            {data.image ? (
              <img src={data.image} className="h-full" />
            ) : (
              <span className="text-6xl">
                <IoCloudUploadSharp />
              </span>
            )}

            <input
              id="image"
              type="file"
              accept="image/*"
              onChange={uploadImage}
              className="hidden "
            />
          </div>
        </label>
        <label htmlFor="price" className="text-indigo-500 m-1">
          Price
        </label>
        <input
          type="text"
          id="price"
          name="price"
          value={data.price}
          onChange={handleOnChange}
          className="w-full px-2 py-1 rounded bg-violet-200 mt-2 mb-3 outline-none"
        />
        <label htmlFor="description" className="text-indigo-500 m-1">
          Description
        </label>
        <textarea
          name="description"
          onChange={handleOnChange}
          rows={2}
          value={data.description}
          className="w-full px-2 py-1 rounded bg-violet-200 mt-2 mb-3 outline-none resize-none"
        />
        <div className="flex justify-center mt-6">
          <button className=" px-8 py-2 rounded-md bg-violet-200 text-indigo-500 hover:bg-violet-300 hover:text-indigo-700 cursor-pointer">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewProduct;
