import { useState } from "react"
import { Development } from "./ui/Development";
import { Illustration } from "./ui/Illustration";
import { ProductDesign } from "./ui/ProductDesign";
import { WebDesign } from "./ui/WebDesign";

export const Projects = () => {

  const [work, setWork] = useState("Web Design");

  return (
    <section id='projects' className='h-screen snap-center flex justify-center py-10'>
        <div className='container relative flex flex-col md:flex-row justify-between'>
          {/* Text animate */}
          <div className="flex items-center justify-center">
            <ul className="flex flex-col gap-5">
              <li onClick={() => setWork("Web Design")} className="stroke stroke1">Web Design</li>
              <li onClick={() => setWork("Development")} className="stroke stroke2">Development</li>
              <li onClick={() => setWork("Illustration")} className="stroke stroke3">Illustration</li>
              <li onClick={() => setWork("Product Design")} className="stroke stroke4">Product Design</li>
              <li className="stroke stroke5">Social Media</li>
            </ul>
          </div>
          {/* 3d model */}
          <div className='flex justify-center items-center m-auto grow h-40 md:h-[600px] cursor-pointer'>
            {
              work === "Web Design" ? 
              <WebDesign /> : 
              work === "Illustration" ? 
              <Illustration /> : 
              work === "Development" ? 
              <Development /> : 
              <ProductDesign />
            }
            <div>
          </div>

          </div>
        </div>
    </section>
  )
}
