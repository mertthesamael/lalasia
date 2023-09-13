import { useSearchParams } from "next/navigation";
import { useCallback } from "react";

// Define the type for the hook function
type CreateQueryStringFn = (name: string, value: string | number) => string;

const useCreateQueryString: () => CreateQueryStringFn = () => {
  // Wrap your existing createQueryString function in useCallback
  const searchParams: any = useSearchParams();

  const createQueryString: CreateQueryStringFn = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, String(value));
      return params.toString();
    },
    [searchParams]
  );

  // Return the createQueryString function
  return createQueryString;
};

export default useCreateQueryString;
