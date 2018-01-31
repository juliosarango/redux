function leftPad(number) {
  const pad = '00';
  return pad.substring(0, pad.length - number.length) + number;
}

function formattedTime(secs) {
  const minutes = parseInt(secs / 60, 10);
  const seconds = parseInt(secs % 60, 10);

  return `${minutes}:${leftPad(seconds.toString())}`;
}

function manejoFullScreen(player) {
  const es_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
  if (es_chrome) {
    if (!document.webkitIsFullScreen) {
      player.webkitRequestFullscreen()
    } else {
      document.webkitExitFullscreen();
    }
  }
  const es_firefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
  if (es_firefox) {

    if(!document.mozFullScreen){
      player.mozRequestFullScreen()
    } else {
      document.mozCancelFullScreen()
    }
  }
}

export {formattedTime, manejoFullScreen}
