import React from 'react';

function useHandleStreamResponse({
  onChunk,
  onFinish
}) {
  const handleStreamResponse = React.useCallback(
    async (response) => {
      if (response.body) {
        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let content = "";

        while (true) {
          const { done, value } = await reader.read();
          if (done) {
            onFinish(content);
            break;
          }
          content += decoder.decode(value, { stream: true });
          onChunk(content);
        }
      }
    },
    [onChunk, onFinish]
  );

  return handleStreamResponse;
}

function useUpload() {
  const [loading, setLoading] = React.useState(false);

  const upload = React.useCallback(async (input) => {
    setLoading(true);
    try {
      const response = await fetchUpload(input);
      if (!response.ok) {
        handleUploadError(response);
      }
      const data = await response.json();
      return { url: data.url, mimeType: data.mimeType || null };
    } catch (uploadError) {
      return { error: handleError(uploadError) };
    } finally {
      setLoading(false);
    }
  }, []);

  return [upload, { loading }];
}

async function fetchUpload(input) {
  const formData = new FormData();
  let response;

  if ("file" in input) {
    formData.append("file", input.file);
    response = await fetch(`${window.location.origin}/api/upload`, {
      method: "POST",
      body: formData,
    });
  } else {
    const body = "url" in input ? { url: input.url } :
                 "base64" in input ? { base64: input.base64 } :
                 input.buffer;

    response = await fetch(`${window.location.origin}/api/upload`, {
      method: "POST",
      headers: {
        "Content-Type": typeof body === 'string' ? "application/octet-stream" : "application/json",
      },
      body: typeof body === 'string' ? body : JSON.stringify(body),
    });
  }

  return response;
}

function handleUploadError(response) {
  if (response.status === 413) {
    throw new Error("Upload failed: File too large.");
  }
  throw new Error("Upload failed");
}

function handleError(uploadError) {
  if (uploadError instanceof Error) {
    return uploadError.message;
  }
  if (typeof uploadError === "string") {
    return uploadError;
  }
  return "Upload failed";
}

export {
  useHandleStreamResponse,
  useUpload,
}
