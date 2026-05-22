# Arabic Language Support Implementation

## Overview
Your website now has full Arabic language support with smooth transitions and RTL (Right-to-Left) layout support. Users can switch between English and Arabic using the language switcher button in the navbar.

## Features

### 🇸🇦 Language Switcher
- **Location**: Navigation bar (top-right on desktop, in mobile menu on mobile)
- **Appearance**: Saudi flag emoji with language label (العربية/English)
- **Functionality**: Click to instantly switch between English and Arabic
- **Persistence**: Language preference is saved to localStorage and persists across sessions

### 📱 RTL Support
When Arabic is selected:
- Document direction automatically changes to RTL
- All layouts automatically adjust for right-to-left reading
- Text alignment adapts intelligently

### 🌍 Translations
Complete translations are available for all major sections:
- Navigation menu
- Hero section
- About section
- Services section
- How We Work process
- Footer

## File Structure

```
src/
├── i18n/
│   ├── config.ts                 # i18n configuration
│   └── locales/
│       ├── en.json              # English translations
│       └── ar.json              # Arabic translations
├── contexts/
│   └── LanguageContext.tsx       # Language context provider
├── sections/
│   ├── Navbar.tsx              # Updated with language switcher
│   ├── HeroSection.tsx          # Translated
│   ├── AboutSection.tsx         # Translated
│   ├── ServicesSection.tsx      # Translated
│   ├── HowWeWorkSection.tsx     # Translated
│   └── FooterSection.tsx        # Translated
├── main.tsx                     # Setup with i18n & LanguageProvider
└── index.css                    # RTL support added

```

## How It Works

### 1. **Initialization** (`main.tsx`)
```tsx
import './i18n/config'
import { LanguageProvider } from './contexts/LanguageContext'

// Wrap app with LanguageProvider
<LanguageProvider>
  <App />
</LanguageProvider>
```

### 2. **Context Provider** (`LanguageContext.tsx`)
- Manages language state
- Provides `toggleLanguage()` function
- Sets document direction (dir attribute)
- Saves preference to localStorage

### 3. **Using Translations in Components**
```tsx
import { useTranslation } from 'react-i18next'

export default function MyComponent() {
  const { t } = useTranslation()
  
  return (
    <h1>{t('nav.home')}</h1>  // Renders "Home" or "الرئيسية"
  )
}
```

## Adding New Translations

### To translate new content:

1. **Add to English translation** (`src/i18n/locales/en.json`):
```json
{
  "mySection": {
    "title": "My Title",
    "description": "My Description"
  }
}
```

2. **Add to Arabic translation** (`src/i18n/locales/ar.json`):
```json
{
  "mySection": {
    "title": "عنوان بلدي",
    "description": "وصفي"
  }
}
```

3. **Use in component**:
```tsx
const { t } = useTranslation()
return <h1>{t('mySection.title')}</h1>
```

## Styling for RTL

The site automatically handles RTL styling through:

1. **HTML Direction**: `document.documentElement.dir = 'rtl'`
2. **CSS Support**: RTL-aware Tailwind classes
3. **Flexbox & Grid**: Automatically adjust for direction

### Custom RTL Styles (if needed):
```css
html[dir="rtl"] {
  /* RTL-specific styles */
  text-align: right;
}

html[dir="ltr"] {
  /* LTR-specific styles */
  text-align: left;
}
```

## Browser Support

- ✅ All modern browsers (Chrome, Firefox, Safari, Edge)
- ✅ Mobile browsers
- ✅ Automatic direction handling

## Troubleshooting

### Language doesn't persist after refresh
- Check browser localStorage is enabled
- Ensure `localStorage.getItem('language')` is working

### RTL layout issues
- Clear browser cache
- Check that `document.documentElement.dir` is set correctly
- Verify Tailwind CSS is properly configured

### Missing translations
- Check spelling in translation keys
- Ensure key exists in both en.json and ar.json
- Reload page after adding new translations

## Future Enhancements

Potential improvements:
- Add more languages (Urdu, Hindi, etc.)
- Implement language auto-detection based on browser settings
- Add animation transitions between languages
- Create language switcher component for reuse
- Add locale-specific number/date formatting

## Dependencies

- `i18next`: ^23.7.6
- `react-i18next`: ^14.1.0

Install with: `npm install`

---

**Created**: May 2026
**Last Updated**: May 2026
