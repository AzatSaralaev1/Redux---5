import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../action/CounterAction.js';
import audioFile from '../audio/Miyagi_Nochi_v_odnogo.mp3';

const AudioPlayer = ({ isPlaying, onEnded }) => (
  <audio autoPlay={isPlaying} onEnded={onEnded}>
    <source src={audioFile} type="audio/mp3" />
  </audio>
);

const buttonContainerStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '20px',
};

const buttonStyles = {
  backgroundColor: '#082981',
  width: '70px',
  height: '55px',
  fontSize: '40px',
  color: 'cyan',
  border: 'none',
  borderRadius: '200px',
  margin: '0 10px',
  transition: '0.8s',
};

const counterStyles = {
  backgroundColor: '#082981',
  width: '60px',
  height: '45px',
  fontSize: '40px',
  color: 'cyan',
  border: 'none',
  borderRadius: '200px',
  transition: '0.8s',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '20px',
};

const imageStyles = {
  width: '100vw',
  height: '100vh',
  objectFit: 'cover',
};

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  useEffect(() => {
    const audio = new Audio(audioFile);

    const playAudio = () => {
      audio.play().then(() => {
        setIsAudioPlaying(true);
      });
    };

    document.addEventListener('click', playAudio);

    return () => {
      document.removeEventListener('click', playAudio);
      audio.pause();
    };
  }, []);

  const handleCounterClick = () => {
    if (!isAudioPlaying) {
      setIsAudioPlaying(true);
    }
  };

  const handleEnded = () => {
    setIsAudioPlaying(false);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
      }}
      onClick={handleCounterClick}
    >
      {isAudioPlaying && <AudioPlayer isPlaying={isAudioPlaying} onEnded={handleEnded} />}

      <img
        src="../images/miyagi.jpg"
        alt="miyagi"
        style={imageStyles}
      />

      <div style={{ ...buttonContainerStyles, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        <button
          style={buttonStyles}
          onClick={() => dispatch(increment())}
        >
          +
        </button>

        <span style={counterStyles}>{count}</span>

        <button
          style={buttonStyles}
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
