import { signIn } from "../../../auth";
import { Button } from "antd";

type Props = {};

export default function SignIn({
  provider,
  ...props
}: { provider?: string } & React.ComponentPropsWithRef<typeof Button>) {
  return (
    <form
      action={async () => {
        "use server";

        const response = await signIn(provider);
        console.log(response);
      }}
    >
      <Button {...props} htmlType="submit">
        Sign In
      </Button>
    </form>
  );
}
