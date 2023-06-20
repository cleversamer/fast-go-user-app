import { useState, useEffect } from "react";
import { Audio } from "expo-av";

export default function useSoundPlayer(
  soundFile,
  shouldLoop = false,
  autoPlay = true,
  maxDuration = null
) {
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const loadSound = async () => {
      try {
        const { sound } = await Audio.Sound.createAsync(soundFile, {
          shouldPlay: autoPlay,
          isLooping: shouldLoop,
        });
        setSound(sound);
        setIsPlaying(autoPlay);
        if (maxDuration !== null) {
          setTimeout(() => {
            stopSound();
          }, maxDuration * 1000);
        }
      } catch (error) {
        console.error("Error loading sound:", error);
      }
    };

    loadSound();

    return () => {
      if (sound && sound.getStatusAsync) {
        sound
          .getStatusAsync()
          .then((status) => {
            if (status.isLoaded) {
              console.log("LOADED");
              sound.stopAsync();
              sound.unloadAsync();
            }

            console.log("NOT LOADED");
          })
          .catch((error) => {
            console.error("Error getting sound status:", error);
          });
      }
    };
  }, [soundFile, shouldLoop, autoPlay, maxDuration]);

  const playSound = async () => {
    try {
      if (sound && !isPlaying) {
        await sound.replayAsync();
        setIsPlaying(true);
        if (maxDuration !== null) {
          setTimeout(() => {
            stopSound();
          }, maxDuration * 1000);
        }
      }
    } catch (error) {
      console.error("Error playing sound:", error);
    }
  };

  const pauseSound = async () => {
    try {
      if (sound && isPlaying) {
        await sound.pauseAsync();
        setIsPlaying(false);
      }
    } catch (error) {
      console.error("Error pausing sound:", error);
    }
  };

  const stopSound = async () => {
    try {
      if (sound && isPlaying) {
        await sound.stopAsync();
        setIsPlaying(false);
      }
    } catch (error) {
      console.error("Error stopping sound:", error);
    }
  };

  return {
    play: playSound,
    pause: pauseSound,
    stop: stopSound,
    isPlaying,
  };
}
