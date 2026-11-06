import { useEffect } from 'react';

interface SeoProps {
  title: string;
  description: string;
  path?: string;
}

export function useSeo({ title, description, path = '' }: SeoProps) {
  useEffect(() => {
    document.title = title;
    setMeta('description', description);
    setProp('og:title', title);
    setProp('og:description', description);
    setProp('og:url', `https://sentimo.example${path}`);
    setProp('twitter:title', title);
    setProp('twitter:description', description);
  }, [title, description, path]);
}

function setMeta(name: string, content: string) {
  let el = document.querySelector(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('name', name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setProp(property: string, content: string) {
  let el = document.querySelector(`meta[property="${property}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('property', property);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}
