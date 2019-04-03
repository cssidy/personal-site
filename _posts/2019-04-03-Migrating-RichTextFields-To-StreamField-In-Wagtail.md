---
layout: post
comments: true
date: 2019-04-03
title: Migrating RichTextFields to StreamField in Wagtail
---

I recently converted RichTextFields to a StreamFields in a Django blog built with Wagtail CMS. 
I wanted to make this change so that I could have more complex content within blog posts. The rich text editor is a nice quick solution to get a blog up and running, but it is also limiting. You can't have links over images, Google Maps, videos with captions, or multi-column layouts. Luckily, that's what StreamFields were designed for. Additionally, I wanted to preserve my already published posts and be able to improve upon them. To do that, I needed to convert them all to StreamFields.

I found the Wagtail documentation to be skimpy, which turned this task into a much longer struggle than it should have been.
If you're struggling too, perhaps this tutorial will help you on your mission.

## Tutorial

:small_red_triangle: I am using Wagtail version 2.1.3.

### Models

To start, you should have a ```models.py``` that looks something like this:

```python

from django.db import models
from wagtail.core import blocks
from wagtail.core.fields import StreamField, RichTextField
rom wagtail.admin.edit_handlers import FieldPanel, StreamFieldPanel


class BlogPost(Page):
  body = RichTextField()

  content_panels = Page.content_panels + [
          FieldPanel('body'))
          ),
      ]

```

Or first step is to convert the ```body = RichTextField()``` into a StreamField. We also need to change the type of panel that it uses in the Wagtail UI. And so, our ```models.py``` turns into:

```python

from django.db import models
from wagtail.core import blocks
from wagtail.core.fields import StreamField, RichTextField
rom wagtail.admin.edit_handlers import FieldPanel, StreamFieldPanel


class BlogPost(Page):
  body = StreamField([
  ])

  content_panels = Page.content_panels + [
          StreamFieldPanel('body'))
          ),
      ]

```

Note: we don't actually have to make a migration to change the type of panel. That should update when you refresh your panel. But we'll bundle it into this commit because we can.

### Migrations

Next we will make the migrations. In your terminal, navigate to the directory with ```manage.py```. We'll enter the command to create a new migration:

```
./manage.py makemigrations --name convert_richtextfield_to_streamfield
```
