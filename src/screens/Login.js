import useDarkMode from "../hook/useDarkMode";

const Login = () => {

  return (
    <>
      <div className="bg-yellow-200 dark:bg-black from-indigo-50 via-blue-50 to-red-50 flex flex-col-reverse md:flex-row md:justify-between px-5 md:px-20 py-12 md:py-24 h-screen">
        <div className="w-full md:w-7/12 md:pr-12 pt-4">
          <h1 className="text-3xl lg:text-8xl md:text-6xl text-gray-800 dark:text-gray-100 dark:white text-primary">
            Aumenta tu productividad con los mejores usa aKaGodas
          </h1>
          <p className="mt-3 md:mt-6 text-base lg:text-3xl md:text-2xl text-gray-600 dark:text-gray-300 leading-normal">
            aKa Godas es una herramienta simplificada basada en el metodo Kanban para uso personal que te ayuda a organizar tu vida y tu trabajo para obtenter la mayor productividad.
          </p>
          <div className="flex mt-6 md:mt-16 text-sm md:text-base">
            <button className="bg-green-500  px-2 py-1 mr-4 text-gray-100 dark:text-black font-semibold rounded-sm transform hover:-translate-y-1 hover:bg-green-700 transition-transform duration-300">
              Continua con Google
            </button>
            <button className="border border-none  px-2 py-1 text-gray-800 dark:text-white rounded-sm transform hover:-translate-y-1 hover:bg-red-400  transition-transform duration-300">
              Continua como Invitado <sup>*</sup>
            </button>
          </div>
          <p className="text-xs text-gray-600 dark:text-white mt-6">
            <sup>*</sup> Tus datos seran borrados una vez te desconectes como invitado.
          </p>
        </div>
        <div className="w-full md:w-5/12">
          <img src={require("../styles/plan.png").default} alt="plan" />
        </div>
      </div>
    </>
  );
};

export default Login;
