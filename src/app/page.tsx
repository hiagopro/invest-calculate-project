"use client"
import Hero from "./components/Hero";
import Result from "./components/Result";
import React, { useState } from "react";

export default function Home() {
  const [result, setResult] = useState(0)
  return (
    <div>
    <Hero setResult={setResult} result={result} />
    <Result result={result}/>
    </div>
  );
}
