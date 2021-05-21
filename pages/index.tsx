function Home () {
  return (
    <>
      <div className="container mx-auto h-96 my-10 p-10 bg-indigo-200 rounded-xl shadow-xl">
        <div className="grid-cols-1 rounded-md p-5">
          <h1 className="text-3xl mb-0">Sign In</h1>
          <form className="p-3 pl-0">
            <div className="mt-5">
              <label htmlFor="username" className="pb-2 block text-lg">
                Username
              </label>
              <input
                type="text"
                name="username"
                className="rounded py-1 px-2"
              ></input>
            </div>
            <div className="mt-5">
              <label htmlFor="password" className="pb-2 block text-lg">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="rounded py-1 px-2"
              ></input>
            </div>
            <button className="rounded bg-blue-500 py-1 px-3 mt-6 text-white">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Home
