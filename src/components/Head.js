import React from 'react';

const Head = () => {
    return (
        <div className='grid grid-flow-col p-4 m-2'>
            <div className='flex gap-3 col-span-1'>
                <img className='size-7' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8AAADPz89LS0uWlpb39/eCgoKQkJCxsbH29vZiYmI4ODh0dHTX19empqbFxcXr6+sQEBDh4eEbGxu7u7s0NDR6enpXV1egoKDJyclvb28ODg6IiIhcXFwfHx8ZGRnwNjATAAACZUlEQVR4nO3dCW7CMBCFYRdIw75vbSm9/y2rqKgUVRo72NJoxv93gveUkGBj7BAAAAAAAAAAAAAAAAAAoAKrdjq0Y9qu+tVbH1/sOa7TC7baYZ/UJvZrZtpJnzZrkgputHNm2KRUPGinzHKIF3zVzpjpNVZwq50w2zbScKodMNtULjjRzlfARGw41o5XwFhsONeOV8BcbGj3ZX83Extqpyui8oY77XQFXMWGJ+14BZzEhlbHTX/JY6iBdrwCFmJDD48auWBYaufLtow0NP803cUKhoV2xEyRT6H9+zR6j3bO2ikznFMKhrDSzvm05GnhxuYgap40l3izHlmbcpuNekx53y7kdmDHts/lAwAAAAAAAAAAxjRvy5Edy7e+P1zsh9q/JfU23PfoN7hqx33KdZBa0O5i9ugy9h+f2jkzfKYUfNdOmeU9XtD6Sm95lXfwsFhfXqofwkU7YLZLpKF2vgLkgnYXC93Jy4bsvgrv5JeivS9r/w3Fhh/a8QrYiA210xVR+TX0/zn0/yz1/z708KiRC1bwvdT+2CI6JeV+fFjBGL+CeRrLT5vEubYK5kuD/znvjvffLQAAAAAAAAAAgCHO94myt9fXoddeXxOj+7XFFkD/srtsKHHPPff7Jrrf+9L//qVf2hEzRfegtX2PdmL3qXa+AuSC/vfz9r8nu/999a3v5t2Rn6ba6YqovKH/c2ZsDpseyWcFWV/l3ZFXettfqh/9I7D7c9cqODvP/H+7EhazW5tke5RwhmVoLI+Bk84h9X+WbLA7hko9DzhUcKZzx/m53AAAAAAAAAAAAAAAAABg0zfn21Nf0tdOJAAAAABJRU5ErkJggg==" alt="" />
                <img className='h-8' src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/753px-Logo_of_YouTube_%282015-2017%29.svg.png' alt="" />
            </div>
            <div className='flex col-span-10 justify-center'>
                <input type="text" className='border border-gray-400 w-1/2 py-2 px-3 text-gray-700 leading-tight rounded-l-full' />
                <button className='border border-gray-400 p-2 rounded-r-full bg-gray-100'>🔍</button>
            </div>
            <div className='col-span-1'>
                <img className='h-8' src="data:image/jpeg;base64,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" alt="" />
            </div>
        </div>
    )
}

export default Head;
