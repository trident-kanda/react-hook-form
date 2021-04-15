import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import Result from "../compornents/Result";
Modal.setAppElement("#__next");
export default function Home() {
  const [data, setData] = useState<form>({ email: "", password: "", name: "" });
  const [modalState, stateChange] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  type form = {
    name: string;
    email: string;
    password: string;
  };
  const onSubmit = (data: form) => {
    setData(data);
    stateChange(true);
  };
  const closeModal = useCallback(() => {
    stateChange(false);
  }, [stateChange]);
  return (
    <div className="h-screen flex center items-center justify-center">
      <Modal isOpen={modalState}>
        <Result userData={data} closeModal={closeModal} />
      </Modal>
      <div className=" sm:max-w-xl bg-white  w-full sm:rounded-lg p-5 shadow">
        <h2 className="text-center text-3xl font-bold text-red-500">Form</h2>
        <div className="  border-b-2 border-black " />
        <form className="p-2 " onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">Name</label>
          {errors.name && (
            <span className="ml-3 text-red-500">{errors.name.message}</span>
          )}
          <input
            placeholder="名前"
            {...register("name", { required: "必須項目です" })}
            className="block w-full form-input focus:outline-none py-1 px-2 rounded-md border-gray-300 border-2 focus:border-blue-300"
          ></input>
          <label htmlFor="email">Email</label>
          {errors.email && (
            <span className="ml-3 text-red-500">{errors.email.message}</span>
          )}
          <input
            placeholder="メールアドレス"
            {...register("email", {
              required: "必須項目です",
              pattern: {
                value: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "メールアドレスが不適切です",
              },
            })}
            className="block w-full form-input focus:outline-none py-1 px-2 rounded-md border-gray-300 border-2 focus:border-blue-300"
          ></input>
          <label htmlFor="password">Password</label>
          {errors.password && (
            <span className="ml-3 text-red-500">{errors.password.message}</span>
          )}
          <input
            placeholder="パスワード(8文字以上)"
            {...register("password", {
              required: "必須項目です",
              pattern: {
                value: /^[a-z\d]{8,100}$/i,
                message: "パスワードは8文字以上です",
              },
            })}
            type="password"
            className="block w-full form-input focus:outline-none py-1 px-2 rounded-md border-gray-300 border-2 focus:border-blue-300"
          ></input>
          <input
            type="submit"
            value="送信"
            className="mx-auto mt-5 block w-32 py-2 bg-pink-400 text-white rounded-md focus:outline-none hover:bg-pink-300"
          />
        </form>
      </div>
    </div>
  );
}
