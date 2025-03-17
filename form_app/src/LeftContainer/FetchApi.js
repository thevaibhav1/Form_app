import { useEffect, useState } from "react";
const FetchApi = async () => {
  const [data, setData] = useState([]);
  const reqobject = {
    method: "POST",
    header: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email }),
  };
  const response = await fetch("https://test.ezworks.ai/api", reqobject);
  console.log(response);
};
