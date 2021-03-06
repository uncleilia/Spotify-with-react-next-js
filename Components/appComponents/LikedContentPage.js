import React from 'react'

import MediaPlayer from './MediaPlayer'
import Card from './Card'

import styles from '../../styles/ComponentStyles/ContentPage.module.css'

import {useSelector} from 'react-redux'

const LikedContentPage = () => {

    const state = useSelector(state => state)

    return (
        <div className={styles.ContentPageMain}>
            <div className={styles.contentMain}>
                {state.Songsreducer.songs.map((item, index)=>{
                    if(item.is_liked){
                        return(
                            <Card
                                is_active={item.is_active}
                                songName={item.songName}
                                isLiked={item.is_liked}
                                artistName={item.artist} 
                                img={item.coverSrc}
                                key={index}
                                index={index}
                                wholeItem={item}
                            />
                        )
                    }
                })}
            </div>
            <MediaPlayer />
        </div>
    )
}

export default LikedContentPage