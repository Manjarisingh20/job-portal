


export default function Image({ src, alt, ...args }) {
    return <img src={src} alt={alt} {...args} />;
  }