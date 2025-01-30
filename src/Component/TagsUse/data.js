import React from 'react';

export function FallBackImage({ src, alt, style, className, fallbackSrc }) {
  return (
    <img
      src={src}
      alt={alt}
      style={style}
      className={className}
      onError={(e) => (e.target.src = fallbackSrc)}
    />
  );
}

export function Loading() {
  return <div>Loading.....</div>;
}

export function Button({ submit, style, className, text }) {
  return (
    <button onClick={submit} style={style} className={className}>
      {text}
    </button>
  );
}