"use client";

import axios from "axios";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Page = () => {
  const [user, setUser] = useState({});
  const params = useParams();
  const router = useRouter();

  const handleGetUser = async () => {
    try {
      const res = await axios.get(`https://reqres.in/api/users/${params.id}`);
      console.log(res.data.data);
      setUser(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGetUser();
  }, []);

  console.log(user);
  return (
    <>
      <h1>ID : {`${params.id}`}</h1>
      <Image src={user.avatar} alt={user.first_name} width={200} height={200} />
      <button onClick={() => router.back()}>Back</button>
    </>
  );
};

export default Page;
