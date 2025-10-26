# Company Logo Setup

## Where to place company logos:

Place your company logo files in the `public/logos/` directory with these exact filenames:

- `bloomberg-logo.png` - Bloomberg logo
- `meta-logo.png` - Meta logo  
- `amazon-logo.png` - Amazon logo

## Logo Requirements:

- **Format**: PNG (preferred) or SVG
- **Size**: 60x60 pixels minimum (will be scaled to fit)
- **Background**: Transparent or white background works best
- **Style**: Square format recommended for best display

## How it works:

The website will automatically try to load the logo images. If a logo file is missing or fails to load, it will fall back to displaying the company's first letter (B, M, A) in a styled circle.

## File Structure:
```
public/
├── logos/
│   ├── bloomberg-logo.png
│   ├── meta-logo.png
│   └── amazon-logo.png
├── index.html
└── ...
```

## Adding New Companies:

If you add new companies to your experience, just add their logo files to the `public/logos/` directory following the same naming convention: `{company-name}-logo.png`
