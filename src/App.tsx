import { Lock, Mail } from "lucide-react"
import InputAndLabel from "./components/inputAndLabel/input"
import { useLogin } from "./utils/hooks/useLogin"

export default function App() {
  const { handleChange,
    loading,
    data,
    handleSubmit } = useLogin()
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen" dir="ltr">
      <div className="flex flex-col items-center justify-center w-full">
        <div className="flex flex-col items-center justify-start w-full min-h-screen pb-3 bg-white rounded-lg shadow-lg">
          <div className="mb-2 text-center z-[10] mt-16">
            <img
              src="/assets/logos/logo.svg"
              title="Parky Logo"
              className="h-32 w-60"
            />
            {/* 👋 */}
            <h2 className="text-2xl font-bold text-primary mb-6">Welcome Back</h2>

          </div>
          <div
            className="flex gap-1 flex-col w-[90%] max-w-[650px]  sm:w-1/2 lg:w-[41%] mt-10"
          >
            <InputAndLabel
              name="email"
              icon={<Mail />}
              label={"Email"}
              value={data?.email}
              onChange={handleChange}
              type="email"
              placeholder={"Email"}
            />
            <InputAndLabel
              name="password"
              icon={<Lock />}
              type="password"
              onChange={handleChange}
              value={data?.password}
              label="Password"
              placeholder={"Password"}
              see={true}
            />
            <button
              type="button"
              onClick={handleSubmit}
              disabled={loading}
              className={`w-full py-3 z-[10] mt-8 bg-primary text-white rounded-md font-semibold ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              {"Login"}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

