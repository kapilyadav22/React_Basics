// Simplifies copying text to clipboard.

function useClipboard() {
  const [copied, setCopied] = useState(false);

  const copy = async (text) => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return { copied, copy };
}


/*
Asked to test: working with Web APIs.
Use case: “Copy to Clipboard” buttons.
*/