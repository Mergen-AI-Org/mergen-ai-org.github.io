import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'Projects',
      href: getPermalink('/projects'),
    },
    {
      text: 'About Us',
      href: getPermalink('/about'),
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
  ],
};

export const footerData = {
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/company/ai-complex-lab/' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/AI-in-Complex-Systems-Lab' },
    { ariaLabel: 'Huggingface', icon: 'hf-logo', href: 'https://huggingface.co/AICmpxSysLab' },
  ],
};
