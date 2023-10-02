"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

export default function UseMemoPage() {
  const [value, setValue] = useState(0);
  const [data, setData] = useState(20);

  useEffect(() => {
    console.log("useEffect");
    setValue(10);
  }, []);

  const memo = useMemo(() => {
    console.log("useMemo");
    setData(20);
  }, []);

  const CallBack = useCallback((value: any, data: any) => {
    return {
      value,
      data,
    };
  }, []);

  console.log(CallBack);

  return (
    <>
      <h1>useMemo Page</h1>
      <h1>{value}</h1>
      <h1>{data}</h1>
    </>
  );
}
