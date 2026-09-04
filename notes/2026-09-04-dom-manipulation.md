# DOM Manipulation Guide

## Selecting Elements

```javascript
// Single element
document.getElementById('id');
document.querySelector('.class');
document.querySelector('div');

// Multiple elements
document.querySelectorAll('.items');
document.getElementsByClassName('item');
```

## Modifying Elements

```javascript
// Content
element.textContent = 'Hello';
element.innerHTML = '<span>HTML</span>';

// Attributes
element.setAttribute('data-id', '123');
element.getAttribute('data-id');
element.removeAttribute('disabled');

// Classes
element.classList.add('active');
element.classList.remove('hidden');
element.classList.toggle('expanded');
element.classList.contains('active');
```

## Styling

```javascript
element.style.color = 'red';
element.style.display = 'none';
element.className = 'new-class';
```

## Creating Elements

```javascript
const div = document.createElement('div');
div.textContent = 'Hello';
div.className = 'card';
document.body.appendChild(div);
```

## Events

```javascript
// Add listener
element.addEventListener('click', (e) => {
  console.log('Clicked!', e.target);
});

// Remove listener
element.removeEventListener('click', handler);

// Common events
'click', 'submit', 'change', 'keyup', 'focus', 'blur', 'scroll'
```

## Traversal

```javascript
element.parentElement;
element.children;
element.nextElementSibling;
element.previousElementSibling;
element.firstElementChild;
element.lastElementChild;
```
