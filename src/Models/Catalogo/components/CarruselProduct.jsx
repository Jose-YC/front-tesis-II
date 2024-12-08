import React, { useState } from 'react'

export const CarruselProduct = ({ images = [] }) => {
  
    if (!images || images.length === 0)  return ;
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }
    
    const prevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
    }
    return (
        <div className="relative overflow-hidden rounded-lg aspect-video w-full md:w-1/2 mb-8 md:mb-0">
          <div className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {images.map((image, index) => (
              <div key={index} className="min-w-full">
                  <img src={image.url || URL.createObjectURL(image)} alt="img product" className="w-full h-full object-cover"/>
              </div>
            ))}
          </div>
          
          <button
          type='button'
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/75 transition-colors"
            aria-label="Imagen anterior">
            ←
          </button>
          
          <button
            type='button'
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/75 transition-colors"
            aria-label="Siguiente imagen">
            →
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-white' : 'bg-white/50'
                }`}
                aria-label={`Ir a la imagen ${index + 1}`}
              />
            ))}
          </div>
      </div>
    )
}
