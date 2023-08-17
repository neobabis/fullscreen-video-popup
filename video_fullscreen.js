let the_video = document.querySelector("[data-nb_video]");
let button = document.querySelector("[data-nb_open_video_full_screen]");

function openFullscreen(video) {
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.mozRequestFullScreen) { // Firefox
        video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) { // Chrome, Safari and Opera
        video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) { // IE/Edge
        video.msRequestFullscreen();
    }
}

if (the_video && button) {
    document.addEventListener('fullscreenchange', () => {
        if (!document.fullscreenElement) {
            the_video.muted = true; // Mute the video when exiting fullscreen
        }
    });

    button.addEventListener('click', () => {
        the_video.muted = false; // Unmute the video before playing
        the_video.currentTime = 0; // Set video to start
        the_video.play(); // Start playing
        openFullscreen(the_video)
    })
}