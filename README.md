# Interactive Sets Digital Book

A comprehensive 30-page interactive digital textbook covering Sets in Discrete Mathematics, built with React, TypeScript, and Tailwind CSS.

## Features

- 📚 30 interactive pages covering fundamental set theory concepts
- 🎨 Beautiful mathematical theme with subtle animations
- 🔄 Interactive Venn diagrams with hover effects and tooltips
- 📝 Click-to-reveal examples and definitions
- 🧪 Built-in quiz with instant feedback
- ⌨️ Full keyboard navigation support
- 📱 Responsive design for all devices
- ♿ Accessibility features with ARIA labels and semantic HTML
- 🎛️ Customizable settings (animations on/off)

## Content Coverage

1. **Introduction to Sets** - Basic definitions and notation
2. **Types of Sets** - Empty, finite, infinite, singleton sets
3. **Set Representation** - Roster method, set builder notation, Venn diagrams
4. **Set Operations** - Union, intersection, difference, complement, symmetric difference
5. **Relationships** - Equal sets, equivalent sets, subsets
6. **Power Sets** - Definition, properties, and construction
7. **Cardinality** - Finite and infinite cardinalities, countable vs uncountable
8. **Interactive Quiz** - 5 multiple-choice questions with explanations
9. **Summary & References** - Key formulas and further reading

## Running the Application

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation & Setup
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Alternative: Direct File Opening
For a static version, you can build the project and open the resulting `index.html` file directly in a modern browser.

## Navigation

- **Arrow Keys**: ← → to navigate between pages
- **Home Key**: Jump to cover page
- **End Key**: Jump to references page
- **Mouse/Touch**: Click navigation buttons or use page thumbnails
- **Settings**: Toggle animations and view keyboard shortcuts

## Browser Compatibility

✅ **Tested and verified on:**
- Chrome 90+ ✓
- Firefox 88+ ✓
- Edge 90+ ✓
- Safari 14+ ✓

## Technical Features

- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom animations
- **Icons**: Lucide React icon library
- **State Management**: React hooks (useState, useEffect, custom hooks)
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation
- **Performance**: Lazy loading, optimized animations, efficient re-renders
- **Error Handling**: Fallbacks for failed animations and missing content

## Project Structure

```
src/
├── components/
│   ├── BookPage.tsx          # Main page wrapper
│   ├── Navigation.tsx        # Navigation controls
│   ├── InteractiveVenn.tsx   # Venn diagram component
│   └── pages/
│       ├── CoverPage.tsx     # Cover page component
│       ├── TableOfContents.tsx
│       ├── ContentPage.tsx   # Standard content pages
│       ├── QuizPage.tsx      # Interactive quiz
│       └── ReferencesPage.tsx
├── data/
│   └── pages.ts             # All page content and structure
├── hooks/
│   └── useKeyNavigation.ts  # Keyboard navigation hook
├── types/
│   └── page.ts             # TypeScript type definitions
└── App.tsx                 # Main application component
```

## Educational Goals

This digital textbook is designed to:
- Provide interactive learning experiences beyond traditional textbooks
- Help students visualize abstract mathematical concepts
- Offer immediate feedback through interactive elements
- Support different learning styles with multiple representation methods
- Enable self-paced learning with comprehensive content

## Customization

The application supports:
- **Animation Toggle**: Disable animations for users with motion sensitivity
- **Responsive Design**: Adapts to screen sizes from mobile to desktop
- **Theme Consistency**: Mathematical symbols and color-coded content sections
- **Extensible Content**: Easy to add new pages or modify existing content

## License

This educational resource is created for learning purposes and is free to use in educational contexts. Commercial redistribution requires appropriate licensing.

---

**Created using AI-assisted development tools**  
*Last updated: 2024*