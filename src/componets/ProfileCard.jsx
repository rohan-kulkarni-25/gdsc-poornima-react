import Avatar from "./Avatar";
import Name from "./Name";

const ProfileCard = ({ avatarURL }) => {
  return (
    <div className="bg-white h-3/4 w-3/4 rounded-2xl flex flex-col items-center justify-center gap-4">
      {/* AVATAR */}
      <Avatar avatarURL={avatarURL} />

      {/* NAME */}
      <Name title={"GDSC POORNIMA"} />
    </div>
  );
};

export default ProfileCard;
