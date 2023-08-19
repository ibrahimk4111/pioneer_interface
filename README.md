
### My vscode setting 
```
{
  "files.autoSave": "onWindowChange",
  "editor.linkedEditing": true,
  "css.lint.unknownAtRules": "ignore",
  "[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascript]": {
    "editor.defaultFormatter": "vscode.typescript-language-features"
  },
  "[scss]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "workbench.iconTheme": "material-icon-theme",
  "editor.showUnused": false,
  "javascript.updateImportsOnFileMove.enabled": "always",
  "workbench.editorAssociations": {
    "*.sqlite3": "default"
  },
  "editor.mouseWheelZoom": true,
  "workbench.list.mouseWheelScrollSensitivity": 0.5,
  "screencastMode.mouseIndicatorSize": 100,
  "html.format.templating": true,
  "files.associations": {
    "**/templates/*.html": "django-html",
    "**/templates/*": "django-txt",
    "**/requirements{/**,*}.{txt,in}": "pip-requirements",
    "*.html": "html"
  },
  "emmet.includeLanguages": {
    "django-html": "html",
    "django-css": "css"
  },
  "[django-html]": {
    "editor.quickSuggestions": {
      "other": true,
      "comments": true,
      "strings": true
    }
  },
  "[jsonc]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[css]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "workbench.colorTheme": "SynthWave '84",
}

```

### Swiper JS config
```
<div ref={prevRef} className=" bg-slate-200 w-20 h-5">Prev</div>
        <Swiper

          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}

          // install Swiper modules
          modules={[Pagination, A11y, Navigation, FreeMode]}
          freeMode={true}
          grabCursor={true}
          pagination={{ clickable: true }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 5
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 5
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 5
            },

          }}

        >

          {services.map((service, index) => (
            <SwiperSlide className="" ><Service key={index} service={service} index={index} /></SwiperSlide>
          ))}

        </Swiper>

        <div ref={nextRef}>Next</div>
```