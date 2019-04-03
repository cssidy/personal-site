---
layout: post
comments: true
date: 2019-04-03
title: Migrating RichTextFields to StreamField in Wagtail
---

I recently migrated a RichTextField to a StreamField in Django blog build with Wagtail CMS. 
I found the Wagtail documentation to be skimpy, which made this task into a day-long struggle.
If you're struggling too, perhaps this tutorial will help you on your mission.

## Tutorial

### Your Models

To start, you should have a ```models.py``` that looks something like this:

```python

from django.db import models
from wagtail.core import blocks
from wagtail.core.fields import StreamField, RichTextField
rom wagtail.admin.edit_handlers import FieldPanel, StreamFieldPanel


class BlogSimplePostPage(Page):
  body = RichTextField()

  content_panels = Page.content_panels + [
          FieldPanel('body'),e')
          ),
      ]

```

Or first step is to convert this 
