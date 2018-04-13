from django.shortcuts import render
from django.shortcuts import get_object_or_404, redirect, render
from .models import Note

# Create your views here.

def index(request):
    queryset = Note.objects.order_by('-created_at')[:1]
    ls=[]
    for x in queryset:
    	ls.append(x)

    return render(request, "main.html", {
    	"ls":ls,
    })