
const Contact = () => {
  return (
    <div className="flex items-center justify-center my-[100px]">
      <div className="flex flex-col bg-gray-200 w-[50%] h-auto p-[50px]">
        <span className="text-[20px] my-[20px]">
          Do you want to donate blood? Fill in the information.
        </span>

        <label htmlFor="" className="text=[18px] mt-[10px] font-semibold">
          Name :
        </label>

        <input
          type="text"
          className="w-[350px] p-[15px] mt-[10px]"
          placeholder="Onkar Patil"
        />

        <label htmlFor="" className="text=[18px] mt-[10px] font-semibold">
          Phone No :
        </label>

        <input
          type="text"
          className="w-[350px] p-[15px] mt-[10px]"
          placeholder="9699673129"
        />

        <label htmlFor="" className="text=[18px] mt-[10px] font-semibold">
          Email :
        </label>

        <input
          type="email"
          className="w-[350px] p-[15px] mt-[10px]"
          placeholder="example@gmail.com"
          required
        />

        <label htmlFor="" className="text=[18px] mt-[10px] font-semibold">
          Address :
        </label>

        <input
          type="text"
          className="w-[350px] p-[15px] mt-[10px]"
          placeholder="Ganesh colony Tasgaon. Dist Sangli"
          required
        />

        <label htmlFor="" className="text=[18px] mt-[10px] font-semibold">
          Weight (in kg) :
        </label>

        <input
          type="Number"
          className="w-[350px] p-[15px] mt-[10px]"
          placeholder="50"
        />

        <label htmlFor="" className="text=[18px] mt-[10px] font-semibold">
          Blood Group
        </label>
        <select className="w-[350px] p-[15px] mt-[10px]">
          <option value="">Select Blood Group</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
        </select>

        <label htmlFor="" className="text=[18px] mt-[10px] font-semibold">
          Age :
        </label>

        <input
          type="Number"
          className="w-[350px] p-[15px] mt-[10px] "
          placeholder="18"
        />

        <label htmlFor="" className="text=[18px] mt-[10px] font-semibold">
          Do you have any diseases?
        </label>
        <textarea
          type="text"
          className="w-[350px] p-[15px]"
          placeholder="N/A"
        />

        <button
          className="bg-red-500 p-3 mt-3 w-[350px] cursor-pointer text-white"
        >
          Submit
        </button>


      </div>
    </div>
  );
};

export default Contact;
