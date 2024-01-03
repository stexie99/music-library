import React from 'react'
import GalleryItem from './GalleryItem.tsx'

function Gallery(props: any) {
    const display = props.data.map((item: any , i: any)=> {
        return (
            <GalleryItem item={item} key={i}/>
        )
    })

    return (
    <div>
        {display}
    </div>
  )
}

export default Gallery