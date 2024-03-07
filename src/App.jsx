import ProfileCard from "./componets/ProfileCard";

const App = () => {
  let avatarURL = "https://github.com/rohan-kulkarni-25.png";
  return (
    <div className="h-screen w-screen bg-yellow-500 flex flex-row items-center justify-center">
      <ProfileCard avatarURL={avatarURL} />
    </div>
  );
};

export default App;
