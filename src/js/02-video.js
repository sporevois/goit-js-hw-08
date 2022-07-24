// 1. Ознакомься с документацией библиотеки Vimeo плеера.
// 2. Добавь библиотеку как зависимость проекта через npm.
// 3. Инициализируй плеер в файле скрипта как это описано 
// в секции pre - existing player, но учти что у тебя 
// плеер добавлен как npm пакет, а не через CDN.
// 4. Разбери документацию метода on() и начни отслеживать 
// событие timeupdate - обновление времени воспроизведения.
// 5. Сохраняй время воспроизведения в локальное хранилище. 
// Пусть ключом для хранилища будет строка "videoplayer-current-time".
// 6. При перезагрузке страницы воспользуйся методом setCurrentTime() 
// для того чтобы возобновить воспроизведение с сохраненной позиции.
// 7. Добавь в проект бибилотеку lodash.throttle и сделай так, чтобы 
// время воспроизведения обновлялось в хранилище не чаще чем раз в
// секунду.

import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const playerRef = document.querySelector('#vimeo-player')
const player = new Player(playerRef);

player.on('timeupdate', throttle(savesCurrentTimeToStorage, 1000));
function savesCurrentTimeToStorage({seconds}) {
    localStorage.setItem('videoplayer-current-time', parseInt(seconds))
}
const savedTime = localStorage.getItem('videoplayer-current-time')

player.setCurrentTime(savedTime).then(function(seconds) {
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;
        default:
            break;
    }
});