"use client";

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const User = ({ params }) => {
  console.log(params);
  const [page, setPage] = useState(1);
  const [data, setData] = useState([
    // {
    //   id: null,
    //   name: "",
    //   src: "",
    // },
  ]);
  const handleGetUser = async () => {
    try {
      const res = await axios.get(`https://reqres.in/api/users?page=${page}`);
      // console.log(res.data.data);
      setData(res.data.data);
      // console.log(res);
    } catch (error) {
      console.log(error);
    }

    // axios
    //   .get(`https://reqres.in/api/users?page=1`)
    //   .then((res) => {
    //     console.log(res.data.data);
    //     setData(res.data.data);
    //     // console.log(data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  useEffect(() => {
    handleGetUser();
    // console.log(data);
  }, [page]);
  console.log(data);

  const handleNext = () => {
    setPage(page + 1);
  };

  const handleprev = () => {
    setPage(page - 1);
  };

  return (
    <>
      <h1>User Page</h1>
      <div className="flex gap-5">
        <button onClick={handleprev}>prev page</button>
        <button onClick={handleNext}>next page</button>
      </div>
      <div className="flex gap-5 ">
        {data.map((user, idx) => (
          <div key={idx} className="mb-5">
            <h1>{user.first_name}</h1>
            <Image
              src={user.avatar}
              alt={user.first_name}
              // sizes="100"
              width={200}
              height={200}
            />
            <Link href={`/users/${user.id}`} className="text-sm">
              Details User
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

// export const GET = async () => {
//   const users = Response.json("http://reqres.in/api/users?page=1");
//   console.log(users);
//   return users;
// };

export default User;
