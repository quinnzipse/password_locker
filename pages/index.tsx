function Home () {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex justify-end p-4">
          <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
            <div
              style={{ zIndex: -1 }}
              className="inline-flex w-100 transform rotate-45 bg-red-400"
            ></div>
            <div className="p-10  bg-gray-200 shadow-md">
              <form action="login">
                <h1 className="text-3xl mb-0">Sign In</h1>
                <div className="mt-5">
                  <label htmlFor="username" className="pb-2 block text-lg">
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    className="rounded py-1 px-2 w-full"
                  ></input>
                </div>
                <div className="mt-5">
                  <label htmlFor="password" className="pb-2 block text-lg">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="rounded py-1 px-2 w-full"
                  ></input>
                </div>
                <button className="rounded transition bg-indigo-200 hover:bg-indigo-500 hover:text-indigo-100 shadow-md text-indigo-800 py-1 px-3 mt-6">
                  Sign In
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
