import React, { useState, useEffect } from "react";
import Provider from "../components/provider";
import { getAll } from "../services/reddit";

export default function Home() {
  const [json, setJson] = useState([]);
  useEffect(() => {
    getAll().then(setJson);
  }, []);

  return <Provider json={json} />;
}
