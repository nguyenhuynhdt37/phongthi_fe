'use client';
import { Provider } from "react-redux";
import { store, useAppDispatch } from "./store";
import { ReactNode, useEffect } from "react";
import useApp from "antd/es/app/useApp";
import { fetchUser } from "./slices/userActions";
const ProviderStore = ({children} : {children: ReactNode}) => {
 
  return (
    <Provider store={store}>
      {children}
    </Provider> 

    
  )
}

export default ProviderStore