"use client";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button className=" bg-primary text-primary-foreground"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
};

export default Error;
