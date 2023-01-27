export function getImageUrl(url, preview = true) {
    return (
      url + (preview ? '/preview' : '')
    );
  }