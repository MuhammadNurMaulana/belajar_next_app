"use client";
import React from "react";
import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div>
      <h1>Somethink some Error</h1>
      <button onClick={() => reset()} className="p-2 bg-slate-800 text-white">
        Try Again
      </button>
    </div>
  );
}
