"use client";
import { loginAsync } from "@/api/auth";
import Checkbox from "@/components/form/input/Checkbox";
import Input from "@/components/form/input/InputField";
import Label from "@/components/form/Label";
import Button from "@/components/ui/button/Button";
import { ChevronLeftIcon, EyeCloseIcon, EyeIcon } from "@/icons";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Verification from "./modal/Verification";
import { isValidEmail, isValidVinhUniEmail } from "@/lib/checkSyntax";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { fetchUser } from "@/redux/slices/userActions";
import { stat } from "fs";
import { useRouter } from "next/navigation";

export default function SignInForm() {
  const [showPassword, setShowPassword] = useState(false);
  const user = useAppSelector(state => state.counter.user);
  const router = useRouter();
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState('');
  const dispatch = useAppDispatch();
  const [info, setInfo] = useState<ILogin>({
    email: '',
    password: ''
  })
  const [openModal, setOpenModal] = useState(false);
  useEffect(() => {
    if(user) {
      router.push('/');
    }
  }, [user])
  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.name === 'email') {
      setInfo({
        ...info,
        email: e.target.value
      })
    } else {
      setInfo({
        ...info,
        password: e.target.value
      })
    }
  }
  const handleSubmit = async (e : React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    try {
      if(info.email && info.password) {
        if(!isValidEmail(info.email)) {
          setError('Email không hợp lệ')
          return
        }
        if(info.password.length < 8) {
          setError('Mật khẩu phải có ít nhất 8 ký tự')
          return
        }
        setError('')
        const res = await loginAsync(info);
        if(res.status_code === 200) {
          dispatch(fetchUser());
        }
      }
      // setOpenModal(true);
    }
    catch (error) {
      console.log("error", error);
    }
  }
  return (
    <div className="flex flex-col flex-1 lg:w-1/2 w-full">
      <div className="w-full max-w-md sm:pt-10 mx-auto mb-5">
      </div>
      <div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
        <div>
          <div className="mb-5 sm:mb-8">
            <h1 className="mb-2 font-semibold text-gray-800 text-title-sm dark:text-white/90 sm:text-title-md">
              Đăng nhập
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Nhập email và mật khẩu để đăng nhập vào tài khoản của bạn
            </p>
          </div>
          <div>
            <div className="relative py-3 sm:py-5">
            </div>
            <form onSubmit={e => handleSubmit(e)}>
              <div className="space-y-6">
                <div>
                  <Label>
                    Email <span className="text-error-500">*</span>{" "}
                  </Label>
                  <Input name="email"  onChange={(e) => handleOnchange(e)} placeholder="info@gmail.com" type="email" />
                </div>
                <div>
                  <Label>
                    Mật khẩu <span className="text-error-500">*</span>{" "}
                  </Label>
                  <div className="relative">
                    <Input
                      name="password"
                      type={showPassword ? "text" : "password"}
                      onChange={(e) => handleOnchange(e)}
                      placeholder="Nhập mật khẩu"
                    />
                    <span
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute z-30 -translate-y-1/2 cursor-pointer right-4 top-1/2"
                    >
                      {showPassword ? (
                        <EyeIcon className="fill-gray-500 dark:fill-gray-400" />
                      ) : (
                        <EyeCloseIcon className="fill-gray-500 dark:fill-gray-400" />
                      )}
                    </span>
                  </div>
                  <p className="pt-2 ps-1 text-error-500">{error}</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Checkbox checked={isChecked} onChange={setIsChecked} />
                    <span className="block font-normal text-gray-700 text-theme-sm dark:text-gray-400">
                      Giữ cho tôi đăng nhập
                    </span>
                  </div>
                  <Link
                    href="/reset-password"
                    className="text-sm text-brand-500 hover:text-brand-600 dark:text-brand-400"
                  >
                    Quên mật khẩu?
                  </Link>
                </div>
                <div>
                  <Button className="w-full" size="sm">
                    Đăng nhập
                  </Button>
                </div>
              </div>
            </form>

            <div className="mt-5">
              <p className="text-sm font-normal text-center text-gray-700 dark:text-gray-400 sm:text-start">
                Bạn chưa có tài khoản {""}
                <Link
                  href="/signup"
                  className="text-brand-500 hover:text-brand-600 dark:text-brand-400"
                >
                  Đăng ký ngay
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Verification open={openModal} setOpen={setOpenModal} />
    </div>
  );
}
