var videoModal = document.getElementById('videoModal');
  videoModal.addEventListener('hidden.bs.modal', function () {
    // Stop the video when the modal is closed
    var iframe = videoModal.querySelector('iframe');
    iframe.src = iframe.src; // This will reset the video source and stop playback
  });