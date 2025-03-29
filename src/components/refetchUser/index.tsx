'use client'
import { fetchUser } from "@/redux/slices/userActions";
import { useAppDispatch } from "@/redux/store";
import { useEffect } from "react";

const RefetchUser: React.FC = () => {
const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchUser());
  }, []);   
  return null
}

export default RefetchUser