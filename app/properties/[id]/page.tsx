import ReservationSidebar from "@/app/component/properties/ReservationSidebar"
import Image from "next/image"
const PropertyDetailPage = () => {
    return (
        <main className="max-w-[1500px] mx-auto px-6">
            <div className="w-full h-[64vh] mb-4 overflow-hidden rounded-xl relative">
                <Image
                    fill 
                    src="/sullestolvennlige_files/75793dda-2c69-46c3-9996-f9116028cb24.jpg" 
                    alt="Breach house"
                    className="object-cover w-full h-full"
                />
            </div>

            <div className="mt-4 mb-4 grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="py-6 pr-6 col-span-3">
                    <h1 className="mb-4 text-4xl">Protpery name</h1>
                    <span className="mb-6 block text-lg text-gray-600">
                       4 guests - 2 bedrooms - 1 bathroom
                    </span>
                    <hr />
                    <div className="py-6 flex items-center space-x-4">
                        <Image 
                            src="/dog.avif"
                            width={50}
                            height={50}
                            className="rounded-full"
                            alt="The user name" 
                        />

                        <p><strong>John Doe</strong> is your host</p>
                    </div>
                    <hr />
                    <p className="mt-6 text-lg">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Optio aliquid dignissimos inventore magni nobis, molestias, 
                        autem unde excepturi reprehenderit ea est. Adipisci ratione, 
                        unde ea incidunt veritatis numquam suscipit. Ducimus.
                    </p>
                </div>

                <ReservationSidebar />
            </div>
        </main>
    )
}

export default PropertyDetailPage