---
layout: docs
title: MontageJS Overlay UI Container

prev-page: substitution
next-page: troubleshooting
---

# Overlay

The `Overlay` component positions content over your page. You can use any MontageJS prebuilt or custom component in combination with the Overlay component to create different styles of overlay. For example, you can create eye candy (using an image overlay), create an overlay with a text caption, a presentation, interaction, and so on.

The `Overlay` positions content over the page.


## How to use
The following snippet shows how to set up an overlay:

#### Template

```json
"overlayImage": {
    "prototype": "montage/ui/overlay.reel",
    "properties": {
        "element": {"#": "overlayImage"},
        "element": {"#": "overlayImage"}
    }
}
```
```html
<div data-montage-id="overlayImage">
    <img src="http://montagejs.org/images/logo-montage.png">
</div>
```

#### JavaScript

```javascript
overlayImage.show();
```

You can also use overlayImage.hide() method to automatically dismiss the overlay after a preset time. [How?]

[HOW does the overlay get triggered? - need to write the trigger around it.]

## Configuration
[Is positioning the only configuration option?]

### Positioning
The Overlay component supports three types of positioning:

- Absolute, using position coordinates with the `"position"` property:

    ```javascript
"position": {left: 100, top: 50}
```
- Anchored to an element or a component's element (which positions the overlay element right below the anchor and horizontally with it):

    ```javascript

## Positioning
The Overlay supports three types of positioning:
- Specific coordinates with the "position" property:
```javascript
"position": {left: 100, top: 50}
```
    ([Example](https://gist.github.com/anonymous/6005026))

- Anchored to an element or component's element:
```javascript
"anchor": {"#": "icon"}
```

    ```javascript
"anchor": {"@": "owner"}
```

- Screen centered (default position)


    The overlay element is positioned right bellow the anchor and horizontally centered with it ([Example](https://gist.github.com/anonymous/6005017)).
- Screen centered.

    This is the default ([Example](https://gist.github.com/anonymous/6004971)).


## Delegate methods

- `willPositionOverlay(overlay, position)` replaces the calculated position by returning a new one.

    Returning a new position will replace the calculated one.

## Events


- `dismiss` is fired when the user dismisses the overlay by clicking / touching outside of it.

    Fired when the user dismisses the overlay by clicking / touching outside of it.

