import OptionsMenu from "../common/Cards/OptionsMenu";
import Header from "../common/Header";
import ProfileBox from "./ProfileBox";

const ProfilePage = () => {
  return<>
  <Header/>
  <div className="mt-6 mx-20">

  <div className="flex gap-10">

  <OptionsMenu/>
  <ProfileBox/>
  </div>
  </div>
  </>
  ;
};

export default ProfilePage;
