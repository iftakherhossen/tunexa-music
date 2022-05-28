import { CircularProgress, Fab } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

const useAudio = url => {
     const [audio] = useState(new Audio(url));
     [audio].controls = true;
     const [playing, setPlaying] = useState(false);
   
     const playAudio = () => setPlaying(!playing);
   
     useEffect(() => {
         playing ? audio.play() : audio.pause();
     }, [playing, audio]);
   
     useEffect(() => {
          audio.addEventListener('ended', () => setPlaying(false));
          return () => {
               audio.removeEventListener('ended', () => setPlaying(false));
          };
     }, [audio]);
   
     return [playing, playAudio];
};

const IconBox = ({ music }) => {
     const { audio, duration } = music;
     const [playing, playAudio] = useAudio(audio);
     const min = duration.split(':')[0];
     const sec = duration.split(':')[1];
     const time = (((min * 1) * 60) + (sec * 1)) * 1000;
     const [progress, setProgress] = useState(0);

     useEffect(() => {
          const timer = setInterval(() => {
               setProgress((prevProgress) => (prevProgress >= time ? 0 : prevProgress + 1));
          }, 1000);

          return () => {
               clearInterval(timer);
               !playing && setProgress(0);
          };
     }, [time, progress, playing]);

     return (
          <Box sx={{ display: 'flex', alignItems: 'center', pr: 1.5, my: -1 }}>
               <Box sx={{ position: 'relative' }}>
                    <Fab aria-label="play/pause" onClick={playAudio} sx={{ width: 40, height: 40, boxShadow: 0, bgcolor: '#B2BEB5' }} className="fabBtn">
                         {playing === true ? <PauseIcon sx={{ fontSize: 25, color: '#282c34' }} /> : <PlayArrowIcon sx={{ fontSize: 25 }} />}
                    </Fab>
                    {playing && <CircularProgress
                         variant="determinate"
                         size={49}
                         value={! playing ? progress : 0}
                         sx={{
                              position: 'absolute',
                              top: -4,
                              left: -4,
                              zIndex: 1,
                         }}
                    />}
               </Box>                        
          </Box>
     );
};

export default IconBox;