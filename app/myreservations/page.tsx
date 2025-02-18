import Image from "next/image"
import Button from "../UI/Button"

const MyReservationsPage = () => {
    return (
        <main className="max-w-[1500px] mx-auto px-6 pb-6">
            <h1 className="my-6 text-2xl">
                My reservations
            </h1>
            <div className="space-y-4">
                <div className="p-5 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl">
                    <div className="col-span-1">
                        <div className="relative overflow-hidden aspect-square rounded-xl">
                            <Image 
                                fill
                                src="/sullestolvennlige_files/4b472180-6936-4b66-b236-88bbd949f9db.jpeg"
                                className="hover:scale-110 object-cpover transition h-full w-full"
                                alt="Beach house"
                            />
                        </div>
                    </div>
                    <div className="col-span-1 md:col-span-3">
                        <h2 className="mb-4 text-xl">
                            Proper name
                        </h2>
                        <p className="mb-2"><strong>Check in date:</strong> 14/2/2024</p>
                        <p className="mb-2"><strong>Check out date:</strong> 16/2/2024</p>
                        <p className="mb-2"><strong>Number of nights:</strong> 2</p>
                        <p className="mb-2"><strong>Total ptice:</strong> $200</p>
                        <Button />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default MyReservationsPage
