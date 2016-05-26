function youtubeLoadOne(_video_source_ , _video_holder_){
            
            herovideo = new YT.Player(_video_holder_, {
            height: '100%',
            width: '100%',
            videoId: _video_source_,
            playerVars: {
              'autoplay': 0,
              'controls':1,
              'playsinline':1,
              'list':'PLOIUo5cmmfoLpqe2ZjLEodLNFZF8i-oCh',
              'rel':0
            },
            events: {
              'onReady': onPlayerReady,
              'onStateChange': onPlayerOneStateChange
               }
            });

           function onPlayerReady(event) {

              if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
              }else{
              event.target.playVideo();
               //event.target.loadPlaylist({list: "PLOIUo5cmmfoLpqe2ZjLEodLNFZF8i-oCh", index: 0});

              }
 
            }

           function onPlayerOneStateChange(event) {
                if (event.data == YT.PlayerState.PLAYING) {

                }

                else if(event.data == YT.PlayerState.ENDED){
                  
          
                }
            }


  
}


function onYouTubeIframeAPIReady() {
  
    console.log('api ready');
    youtubeLoadOne('3Us6f30qBDc','video-trailer');
}
