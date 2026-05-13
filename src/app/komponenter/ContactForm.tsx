"use client"



export default function ContactForm() {
    

    return (
        <>
        
     

       
            <div
            className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="relative bg-white p-9 w-full max-w-md shadow-xl bg-black scale-100 animate-in fade-in zoom-in-50">
        
            <h2 className="mb-4 formHeader">
            Contact me
            </h2>
            <form className="flex flex-col gap-3 formText">
            <input
            type="text"
            placeholder="Your name"
            className="border p-2 text-black bg-white formText"
            required
            />
            <input
            type="email"
            placeholder="Your email"
            className="border p-2 text-black bg-white formText"
            required
            />
            <textarea
            placeholder="Your message"
            className="border  text-black bg-white p-2 formText"
            rows={4}
            required
            />
            <button
            type="submit"
            className="border  text-black bg-white p-2 hover:bg-orange-700"
             >
                 Submit
            </button>
            </form>
            </div>
            </div>
        </>
    )
 
}