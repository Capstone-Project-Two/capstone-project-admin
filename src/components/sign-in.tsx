"use client"
import { authSignIn, authSignOut } from "@/service/auth-service";
import { Button, Input } from "antd";
import { ErrorMessage, Form, Formik } from "formik";

type Props = {};

export default function SignIn({
  provider,
  ...props
}: { provider?: string } & React.ComponentPropsWithRef<typeof Button>) {
  return (
    <div className="flex flex-col gap-4">
      <Formik
        initialValues={{
          email: 'chhay@chhantek.com',
          password: 'P@$$w0rd',
        }}
        onSubmit={async (values) => {
          console.log(provider)
          const formData = new FormData()
          formData.append('email', values.email)
          formData.append('password', values.password)
          await authSignIn(values).catch(err => {
            // console.log(err)
          });
        }}
      >
        {({ handleChange, values }) => {
          return (
            <Form className="w-full flex flex-col gap-4" encType="multipart/form-data">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium "
                >
                  Email
                </label>
                <Input defaultValue={"chhay@chhantek.com"} value={values.email} name="email" onChange={handleChange} placeholder="Write something here..." type="email" />
                <div className="text-red-500 text-sm mt-2" >
                  <ErrorMessage name="email" />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium "
                >
                  Password
                </label>
                <Input defaultValue={"P@$$w0rd"} value={values.password} name="password" onChange={handleChange} placeholder="Write something here..." />
                <div className="text-red-500 text-sm mt-2" >
                  <ErrorMessage name="password" />
                </div>
              </div>

              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form>
          )
        }}
      </Formik>

      <Button onClick={async () => {
        await authSignOut();
      }}>
        Sign out
      </Button>
    </div>
  );
}
