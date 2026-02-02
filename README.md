# React + TypeScript + Vite

**Why SVG Logo Used:**
 - Best For: Logos, icons, simple illustrations, and interactive, animated graphics.
 - Advantages: Sharp on all screen resolutions (responsive), tiny file sizes, editable via CSS/JS, and better for SEO/accessibility.

 Plus Jakarta Sans from Google Fonts used instead of Circular Pro from the Figma design, as it is not publicly available.

**Why Context API was used:**                             
                                                              
  1. Avoids prop drilling - Don't need to pass period through intermediate components                             
  2. Single source of truth - The state lives in one place (the provider)                                              
  3. Easy to extend - If more grid cards are added that need the period, simply call useFilter()                               
  4. Type-safe - The custom hook throws an error if used outside the provider 