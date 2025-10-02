import Button from "@/components/common/Button";
import { useRouter } from "next/router";
import User from "@/users/User";
import { FC } from "react";


const Home: FC = () => {
  const router = useRouter();
  return (
    <div className="h-screen">
        <User />
        <Button
          size="medium"
          shape="rounded-md"
          onClick={() => router.push("/home")}
        >
          See Jobs
        </Button>
      </div>
  );
}
export default  Home;
