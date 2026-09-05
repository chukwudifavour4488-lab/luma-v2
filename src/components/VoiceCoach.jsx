import { useState } from 'react';
import { FaMicrophone } from 'react-icons/fa';
import { motion } from 'framer-motion';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import useStore from '../store';
import Button from './Button';
const VoiceCoach = () => {
  const { transcript, listening } = useSpeechRecognition();
  const { lumaReply, setLumaReply, setVoiceActive } = useStore();
  const handleTalk = async () => {
    setVoiceActive(true);
    SpeechRecognition.startListening({ continuous: false });
    setTimeout(() => {
      SpeechRecognition.stopListening();
      if (transcript) {
        const reply = transcript.includes('stuck') ? "Do 5 minutes. Just start. Right now." : transcript.includes('hard') ? "It's easier than you think. Break it smaller." : transcript.includes('time') ? "Your best time is 10pm. Schedule it then." : "Let's go. One mission. You got this.";
        setLumaReply(reply);
      }
    }, 3000);
  };
  return (
    <motion.div className="bg-[#111] border border-[#FF00FF]/30 rounded-2xl p-4 mt-4">
      <Button color="#FF00FF" onClick={handleTalk}><FaMicrophone /> TALK TO LUMA</Button>
      {listening && <p className="text-xs text-center mt-2 text-[#FF00FF] animate-pulse">Listening...</p>}
      {lumaReply && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm mt-3 text-white p-3 bg-[#1a1a1a] rounded-lg border-l-2 border-[#FF00FF]"><span className="text-[#FF00FF] font-semibold">LUMA:</span> {lumaReply}</motion.p>}
    </motion.div>
  );
};
export default VoiceCoach;