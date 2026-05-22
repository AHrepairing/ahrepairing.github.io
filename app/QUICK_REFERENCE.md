# 🇸🇦 Arabic Language Support - Quick Reference

## ⚡ Quick Start

### For Users:
1. **Click** the flag icon (🇸🇦) in the top-right navbar
2. **Choose** Arabic (العربية) or English
3. **Done!** Entire site switches instantly

### For Developers:

#### Using Translations in Components:
```tsx
import { useTranslation } from 'react-i18next'

function MyComponent() {
  const { t } = useTranslation()
  return <h1>{t('nav.home')}</h1>
}
```

#### Adding New Translations:

**Step 1:** Add to `src/i18n/locales/en.json`
```json
{
  "section": {
    "key": "English text"
  }
}
```

**Step 2:** Add to `src/i18n/locales/ar.json`
```json
{
  "section": {
    "key": "النص العربي"
  }
}
```

**Step 3:** Use in component
```tsx
{t('section.key')} // Renders based on current language
```

---

## 📚 Translation Files

### English: `src/i18n/locales/en.json`
- Navigation
- Hero section
- Services
- Process steps
- Footer

### Arabic: `src/i18n/locales/ar.json`
- جميع الترجمات بالعربية
- دعم كامل RTL
- محفوظ الأصلية

---

## 🎯 Key Components

| Component | File | Purpose |
|-----------|------|---------|
| **i18n Config** | `src/i18n/config.ts` | Initialize translations |
| **Language Context** | `src/contexts/LanguageContext.tsx` | Manage language state |
| **Language Provider** | `src/main.tsx` | Wrap app for i18n |
| **Language Switcher** | `src/sections/Navbar.tsx` | Toggle language |

---

## 🔗 Available Translation Keys

```
nav.home                    → Navbar home link
nav.about                   → Navbar about link
nav.services                → Navbar services link
nav.contact                 → Navbar contact link
nav.phone                   → Phone number in navbar

hero.title                  → Hero main title
hero.subtitle               → Hero subtitle
hero.cta                    → Hero call-to-action button

about.title                 → About section title
about.description           → About description
about.expertise             → Expertise label
about.quality               → Quality service label

services.title              → Services section title
services.subtitle           → Services subtitle
services.description        → Services description
services.acRepair           → AC repair title
services.acDesc             → AC repair description
services.ovenRepair         → Oven repair title
services.ovenDesc           → Oven repair description
services.phoneRepair        → Phone repair title
services.phoneDesc          → Phone repair description
services.laptopRepair       → Laptop repair title
services.laptopDesc         → Laptop repair description
services.tvRepair           → TV repair title
services.tvDesc             → TV repair description
services.fridgeRepair       → Fridge repair title
services.fridgeDesc         → Fridge repair description

howWeWork.title             → How we work title
howWeWork.subtitle          → How we work subtitle
howWeWork.description       → How we work description
howWeWork.step1             → Step 1 title
howWeWork.step1Desc         → Step 1 description
howWeWork.step2             → Step 2 title
howWeWork.step2Desc         → Step 2 description
howWeWork.step3             → Step 3 title
howWeWork.step3Desc         → Step 3 description
howWeWork.step4             → Step 4 title
howWeWork.step4Desc         → Step 4 description

stats.happy                 → Happy clients label
stats.devices               → Devices repaired label
stats.years                 → Years experience label
stats.team                  → Expert team label

why.title                   → Why choose us title
why.warranty                → Warranty label
why.fast                    → Fast service label
why.affordable              → Affordable prices label
why.professional            → Professional team label

testimonials.title          → Testimonials title

cta.title                   → CTA banner title
cta.subtitle                → CTA banner subtitle
cta.button                  → CTA button text

footer.about                → Footer about link
footer.services             → Footer services link
footer.contact              → Footer contact link
footer.privacy              → Privacy policy link
footer.terms                → Terms & conditions link
footer.copyright            → Copyright text
```

---

## ✨ Features Summary

- **Instant switching** without page reload
- **RTL support** for Arabic layout
- **Persistent** language preference (localStorage)
- **Mobile responsive** switcher
- **Type-safe** TypeScript implementation
- **Easy to extend** with new languages

---

## 🐛 Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| Language not saving | Check localStorage is enabled |
| Text not aligned right (Arabic) | Clear cache, hard refresh (Ctrl+Shift+R) |
| Translation key not working | Check spelling in JSON files match |
| Component not updating | Ensure `useTranslation()` is imported |

---

## 📞 Files to Know

```
📦 src/
 ├── 🔤 i18n/
 │   ├── config.ts                  ← Initialize i18next
 │   └── locales/
 │       ├── en.json                ← English translations
 │       └── ar.json                ← Arabic translations
 ├── 📦 contexts/
 │   └── LanguageContext.tsx        ← Language state manager
 ├── 📦 sections/
 │   ├── Navbar.tsx                 ← Has language switcher
 │   ├── HeroSection.tsx            ← Translated
 │   ├── AboutSection.tsx           ← Translated
 │   ├── ServicesSection.tsx        ← Translated
 │   ├── HowWeWorkSection.tsx       ← Translated
 │   └── FooterSection.tsx          ← Translated
 ├── main.tsx                       ← LanguageProvider wrapper
 └── index.css                      ← RTL CSS support
```

---

## 🚀 Development Commands

```bash
# Start dev server
npm run dev

# Build production
npm run build

# Preview build
npm run preview

# Check for errors
npm run lint
```

---

## 📱 Browser Support

- Desktop: Chrome, Firefox, Safari, Edge
- Mobile: iOS Safari, Chrome Mobile, Firefox Mobile
- RTL Support: Full browser support

---

**Last Updated:** May 2026
**Version:** 1.0 - Production Ready ✅
