import { useState, useEffect } from "react";

const RealDate = () => {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    setCurrentDate(new Date().toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' }));
  }, []);

  return <p>{currentDate}</p>;
};

export default RealDate;
