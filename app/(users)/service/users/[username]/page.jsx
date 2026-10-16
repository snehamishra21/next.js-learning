import { Suspense } from "react";
import UserDetail from "./user-detail";

const UsernamePage = ({ params }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold">User Profile</h1>

      <Suspense fallback={<p>Loading profile...</p>}>
        <UserDetail params={params} />
      </Suspense>
    </div>
  );
};

export default UsernamePage;
