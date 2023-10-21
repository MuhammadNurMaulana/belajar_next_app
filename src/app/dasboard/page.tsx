"use client";

import { useState } from "react";

export default function AdminPage() {
  const [status, setStatus] = useState("");
  const revalidate = async () => {
    const res = await fetch("http://localhost:3000/api/revalidate?tag=products&secret=12345", {
      method: "POST",
    });
    if (!res.ok) {
      setStatus("failed");
    } else {
      const respn = await res.json();
      if (respn) {
        setStatus("success");
      }
    }
  };

  return (
    <div>
      <h1>Admin Page</h1>
      <p>{status}</p>
      <button className="m-5 bg-slate-800 text-white p-3" onClick={() => revalidate()} type="button">
        Revalidate
      </button>
    </div>
  );
}
