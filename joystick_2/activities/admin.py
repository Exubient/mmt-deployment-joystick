# -*- coding: utf-8 -*-
from __future__ import unicode_literals

# Register your models here.
from django.contrib import admin
from .models import Note
# Register your models here.

class _Note(admin.ModelAdmin):
	list_display=['id', 'body', 'key', 'created_at']

admin.site.register(Note, _Note)