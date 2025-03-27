

const Cards = () => {
    return (
        <div className="grid lg:grid-cols-3 gap-4 p-4">
            <div className="lg:col-span-1 col-span-1 flex justify-between w-full bg-white border p-4 rounded shadow-lg">
                <div className="flex flex-col">
                    <p className="text-2xl font-semibold">$76.987</p>
                    <p className="text-gray-700">Daily Revenue</p>
                </div>
                <p className="bg-green-100 flex justify-center items-center p-2 rounded-lg">
                    <span className="text-green-700 text-lg p-2">18%</span>
                </p>
            </div>
            <div className="lg:col-span-1 col-span-1 flex justify-between w-full bg-white border p-4 rounded shadow-lg">
                <div className="flex flex-col">
                    <p className="text-2xl font-semibold">$76.987</p>
                    <p className="text-gray-700">Daily Revenue</p>
                </div>
                <p className="bg-green-100 flex justify-center items-center p-2 rounded-lg">
                    <span className="text-green-700 text-lg p-2">18%</span>
                </p>
            </div>
            <div className=" lg:col-span-1 col-span-1 flex justify-between w-full bg-white border p-4 rounded shadow-lg">
                <div className="flex flex-col">
                    <p className="text-2xl font-semibold">$76.987</p>
                    <p className="text-gray-700">Daily Revenue</p>
                </div>
                <p className="bg-green-100 flex justify-center items-center p-2 rounded-lg">
                    <span className="text-green-700 text-lg p-2">18%</span>
                </p>
            </div>
        </div>
    )
}

export default Cards
