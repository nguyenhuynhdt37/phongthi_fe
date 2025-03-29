import { get_info_user } from "@/api/auth";
import { AppDispatch } from "../store";
import { fetchUserFailure, fetchUserStart, fetchUserSuccess } from "./userSlice";

export const fetchUser = () => async (dispatch: AppDispatch) => {
  dispatch(fetchUserStart());

  try {
    const data = await get_info_user();
    dispatch(fetchUserSuccess(data.data));
  } catch (error) {
    dispatch(fetchUserFailure("Lỗi khi tải user"));
  }
};
