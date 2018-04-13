from django.shortcuts import render
from django.shortcuts import get_object_or_404, redirect, render
from .models import Note
import json
# Create your views here.

def index(request):
    queryset = Note.objects.order_by('-created_at')[:1]

    ls=[x for x in queryset]
    qs={"body":ls[0].body, "key":ls[0].key}

    return render(request, "main.html", {
    	"ls":json.dumps(qs),
    })