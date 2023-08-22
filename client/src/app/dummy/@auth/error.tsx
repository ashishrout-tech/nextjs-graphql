"use client";

import { useRouter } from "next/navigation";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  
  const router = useRouter();

  return (
    <div>
      <h2>{error.message}</h2>
      <button className=" bg-primary text-primary-foreground"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => {router.back()}
        }
      >
        Try again
      </button>
    </div>
  );
};

export default Error;