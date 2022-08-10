import LoginForm from "./LoginForm";
import WelcomeToDriver from "./WelcomeToDriver";
const LoginPage = () => {
  return (
    <div className="flex sm:flex-col sm:h-screen sm:gap-10">
      <div className="basis-1/2 sm:basis-auto">
        <WelcomeToDriver />
      </div>
      <div className="basis-1/2 sm:basis-auto">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
