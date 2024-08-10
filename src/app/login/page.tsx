"use client"
import { logo } from "@/utils/image-req-helper";
import { ErrorMessage, Form, Formik } from "formik";
import { Button, Input, notification } from "antd";
import { loginSchema } from "@/lib/validation/login-schema";
import { authSignIn } from "@/service/auth-service";
import BaseImage from "@/components/ui/base-image";
import { useSearchParams } from "next/navigation";
import { ROUTER_PATH } from "@/constants/route-constant";

type Props = {};

export default function LoginPage({ }: Props) {
  const searchParams = useSearchParams()
  const callBackUrl = searchParams.get('callbackUrl')
  const handleSubmit = async (values: { email: string; password: string; }) => {
    const formData = new FormData()
    formData.append('email', values.email)
    formData.append('password', values.password)
    await authSignIn(values, callBackUrl ?? ROUTER_PATH.HOMEPAGE).then(() => {
      notification.success({
        message: 'Login successful'
      })
    }).catch((_) => {
      notification.error({
        message: 'Invalid email or password',
      })
    });
  }
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <BaseImage className="w-8 h-8 mr-2" src={logo} width={64} height={64} alt="logo" />
          Chhantek
        </div>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <Formik
              initialValues={{
                email: '',
                password: '',
              }}
              validationSchema={loginSchema}
              onSubmit={async (value) => await handleSubmit(value)}
            >
              {({ handleChange, values }) => {
                return (
                  <Form method="POST" className="space-y-4 md:space-y-6">
                    <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <Input defaultValue={values.email} className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" value={values.email} name="email" onChange={handleChange} type="email" />
                      <div className="mt-2  text-red-500 text-sm">
                        <ErrorMessage name="email" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <Input defaultValue={values.password} type="password" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={values.password} name="password" onChange={handleChange} placeholder="Write something here..." />
                      <div className="mt-2  text-red-500 text-sm">
                        <ErrorMessage name="password" />
                      </div>
                    </div>
                    <Button type="primary" htmlType="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</Button>
                  </Form>
                )
              }}
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
}
