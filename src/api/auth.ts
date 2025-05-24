"use client"
import { AUTH_URL } from "@/constants/api"
import AxiosInstance from "@/lib/axios"



export const login = async (data: { email: string, password: string }) => {
    const response = await AxiosInstance().post(`${AUTH_URL}/admin/login`, {
        loginId: data.email,
        password: data.password
    });
    return response.data
}

export const verifyOtp = async (data: { otpCode: string, contact: string }) => {
    const response = await AxiosInstance().post(`${AUTH_URL}/admin/verify-otp`, data);
    return response.data
}



export const signUp = async (data: any) => {
    const response = await AxiosInstance().post(`${AUTH_URL}/admin/signup`, data);
    return response.data
}
