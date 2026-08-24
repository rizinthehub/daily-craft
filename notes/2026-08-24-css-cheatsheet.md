# CSS Cheatsheet

## Flexbox

```css
/* Container */
display: flex;
flex-direction: row | column;
justify-content: center | space-between | flex-end;
align-items: center | stretch | baseline;
flex-wrap: wrap;

/* Child */
flex: 1;           /* Grow equally */
flex-shrink: 0;    /* Don't shrink */
align-self: center; /* Override alignment */
```

## Grid

```css
display: grid;
grid-template-columns: 1fr 2fr 1fr;
grid-template-rows: auto 1fr auto;
gap: 1rem;

/* Shortcut */
grid: 200px 1fr / 1fr 2fr;
```

## Common Properties

```css
/* Box Model */
margin: 10px;
padding: 10px;
border: 1px solid black;
box-sizing: border-box;

/* Sizing */
width: 100%;
max-width: 1200px;
min-height: 100vh;

/* Typography */
font-size: 16px;
font-weight: bold;
line-height: 1.5;
text-align: center;

/* Colors */
color: #333;
background: white;
opacity: 0.8;
```

## Positioning

```css
position: relative | absolute | fixed | sticky;
top: 0;
left: 0;
z-index: 10;
```

## Responsive

```css
/* Mobile first */
@media (min-width: 768px) { }
@media (min-width: 1024px) { }

/* Desktop first */
@media (max-width: 768px) { }

/* Shorthand */
@media (width >= 768px) { }
```

## Transitions & Animations

```css
/* Transition */
transition: all 0.3s ease;

/* Animation */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
animation: fadeIn 0.3s ease;
```

## Pseudo-classes

```css
:hover { }
:focus { }
:active { }
:first-child { }
:last-child { }
:nth-child(even) { }
```
