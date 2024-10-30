"use client"; // Đánh dấu đây là Client Component

import Spline from "@splinetool/react-spline";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <>
     <Image
        src="/z5979838940588_293905f8d2830a5a671de494bdb1b80e.jpg" // Đường dẫn tới ảnh
        alt="Mô tả ảnh"           // Mô tả ảnh cho SEO và khả năng truy cập
        width={1000}               // Chiều rộng của ảnh
        height={300}              // Chiều cao của ảnh
        quality={75}              // Chất lượng ảnh (tùy chọn)
      />
    </>
  );
}