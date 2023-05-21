import { useEffect, useState } from "react";
import { setStringAsync } from "expo-clipboard";

const useClipboard = () => {
  const [isCopied, setIsCopied] = useState(false);
  const [showCopiedIcon, setShowCopiedIcon] = useState(false);

  useEffect(() => {
    try {
      let timeoutId;

      if (isCopied && showCopiedIcon) {
        timeoutId = copyText();
      }

      return () => {
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
      };
    } catch (err) {}
  }, [isCopied, showCopiedIcon]);

  const copyText = async (text) => {
    try {
      let timeoutId;

      const isCopied = await setStringAsync(text);
      setIsCopied(isCopied);

      if (isCopied) {
        setShowCopiedIcon(true);

        timeoutId = setTimeout(() => {
          setShowCopiedIcon(false);
          setIsCopied(false);
        }, 2000);
      }

      return timeoutId;
    } catch (error) {
      setIsCopied(false);
    }
  };

  return { isCopied, copyText, showCopiedIcon };
};

export default useClipboard;
