import React from 'react';

const Head = () => {
    return (
        <div className='grid grid-flow-col '>
            <div className='flex size-20'>
                <img src="https://s3-alpha.figma.com/hub/file/3104990295/84797193-e6a1-4c1f-a4e7-d543dd523f42-cover.png" alt="" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4TqCrceRZfnF-nm_aA85msiXJXX2aEVgalg&s" alt="" />
            </div>
            <div>
                <input type="text" />
                <button>Search</button>
            </div>
        </div>
    )
}

export default Head;