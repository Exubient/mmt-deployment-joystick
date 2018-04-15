# -*- coding: utf-8 -*-
from __future__ import unicode_literals

# Create your views here.

from django.shortcuts import render
from django.shortcuts import get_object_or_404, redirect, render
from rest_framework import generics,serializers
from .models import Note
from .serializers import NotesSerializer
import json
# Create your views here.
import serial

class NoteList(generics.ListAPIView):
    queryset = Note.objects.all()
    serializer_class = NotesSerializer


class NoteDetail(generics.RetrieveAPIView):
    queryset = Note.objects.all()
    serializer_class = NotesSerializer



def index(request):
    queryset = Note.objects.order_by('-created_at')[:1]
    ls=[x for x in queryset]
    qs={"body":ls[0].body, "key":ls[0].key}
    return render(request, "main.html", {
    	"v1":ls[0].body,
    	"v2":ls[0].key,
    })
