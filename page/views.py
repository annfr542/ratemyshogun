from django.shortcuts import render
from django.http import HttpResponseRedirect
from comments import models

# Create your views here.

def index(request):
    comments = models.Comment.objects.all()
    love = models.Love.objects.all()

    return render(request, 'page/index.html', {'comments': comments, 'love_list': love})
