export default function App() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div class="mb-4">
        <h2 class="text-sm font-bold mb-2">Two-Factor Authentication</h2>
        <div class="flex-row flex-wrap -mx-2">
          <div class="w-full md:w-1/2 xl:w-1/3 p-2 text-xs">
            <label class=" flex-row mb-1" for="digital-currency">
            <input type="checkbox" id="digital-currency" name="digital-currency"class="gap-3"/>
             Enable or disable Two factor authentication
            </label>
          </div>
        </div>
        <h2 class="text-sm font-bold mt-5">Change Password</h2>
        <div className="md:w-1/2 text-sm">
          <label htmlFor="password" className="block mb-2">Current Password</label>
          <input type="password" id="password" className="text-sm shadow-sm border rounded-xl w-full sm:w-full py-2 px-3 text-slate-500" value="********"/>
        </div>

        <div className="md:w-1/2 text-sm">
          <label htmlFor="password" className="block mb-2">New Password</label>
          <input type="password" id="password" className=" text-sm shadow-sm border rounded-xl w-full sm:w-full py-2 px-3 text-slate-500" value="********"/>
        </div>
      </div>
      <button type="button" className="float-right bg-blue-900 hover:bg-blue-500 w-full sm:w-auto text-white font-bold py-2 px-20 rounded shadow-sm">Save</button>

    </div>
  )
}