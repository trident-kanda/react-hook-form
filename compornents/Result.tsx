type props = {
  userData: {
    name: string;
    email: string;
    password: string;
  };
  closeModal: () => void;
};

const Result = ({ closeModal, userData }: props) => {
  return (
    <div>
      <h2 className="text-center text-3xl font-bold text-red-500">Form</h2>
      <div className="  border-b-2 border-black " />
      <h3 className="text-2xl">Name</h3>
      <p>{userData.name}</p>
      <h3 className="text-2xl">Email</h3>
      <p>{userData.email}</p>
      <h3 className="text-2xl">Password</h3>
      <p>{userData.password}</p>
      <button
        className="mx-auto mt-5 block w-32 py-2 bg-pink-400 text-white rounded-md focus:outline-none hover:bg-pink-300"
        onClick={closeModal}
      >
        戻る
      </button>
    </div>
  );
};

export default Result;
