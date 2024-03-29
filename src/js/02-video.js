import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const savedTime = localStorage.getItem("videoplayer-current-time")
console.log(savedTime)


const onPlay = function({seconds}) {
    localStorage.setItem('videoplayer-current-time', seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));
player.setCurrentTime(savedTime);


    // seconds = the current playback position
